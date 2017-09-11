var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/fabricpane/:patientId', function(req, res, next) {
    var patientId = req.params.patientId;
    var insightRows = [];
    var controlledSubstances = [];
    var registries = [];
    var patient = {};

    sqlclient.loadPatient(patientId, function(err, rows) {

        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }

        patient = rows[0];

        sqlclient.loadPatientInsights(patientId, function(err, rows) {

            if (err) {
                console.log(err);
                res.status(500).send(err);
                return;
            }

            insightRows = rows;

            insightRows.forEach(function(element) {
                element.insightItems = [];
                element.insightLinks = [];
            });

            sqlclient.loadPatientInsightItems(patientId, function(err, rows) {

                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                    return;
                }

                console.log("---- insightitems ----");
                console.log(rows);
                console.log("---- end insightitems ----");

                // now merge in the data into insightRows
                rows.forEach(function(element) {
                    var insightId = element.InsightId.value;
                    var insight = insightRows.find(function(item) {
                        return item.InsightId.value === insightId;
                    });
                    insight.insightItems.push(element);
                });

                sqlclient.loadControlledSubstances(patientId, function(err, rows) {
                    if (err) {
                        console.log(err);
                        res.status(500).send(err);
                        return;
                    }

                    controlledSubstances = rows;

                    sqlclient.loadRegistries(patientId, function(err, rows) {
                        if (err) {
                            console.log(err);
                            res.status(500).send(err);
                            return;
                        } else {
                            registries = rows;
                            res.render('index', {
                                title: 'Fabric Pane',
                                patientName: patientId, // 'Jim Jones',
                                patient: patient,
                                insights: insightRows,
                                controlledSubstances: controlledSubstances,
                                registries: registries
                            });
                        }
                    });
                });
            });
        });
    });
});

module.exports = router;