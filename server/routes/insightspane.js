var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/:patientId', function(req, res, next) {
    var patientId = req.params.patientId;
    var insightRows = [];
    var patient = {};

    var host = req.headers.host;
    console.log("host: " + host);
    //    console.log(req.headers);

    sqlclient.loadPatient(host, patientId, function(err, rows) {

        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }

        patient = rows[0];

        sqlclient.loadPatientInsights(host, patientId, function(err, rows) {

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

            sqlclient.loadPatientInsightItems(host, patientId, function(err, rows) {

                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                    return;
                }

                // now merge in the data into insightRows
                rows.forEach(function(element) {
                    var insightId = element.InsightId.value;
                    var insight = insightRows.find(function(item) {
                        return item.InsightId.value === insightId;
                    });
                    insight.insightItems.push(element);
                });

                res.render('insightspane', {
                    title: 'Optimizing Choices',
                    patientId: patientId, // 'Jim Jones',
                    urltocontrolledsubstancepane: '/controlledsubstancepane/' + patientId,
                    patient: patient,
                    insights: insightRows
                });
            });
        });
    });
});

module.exports = router;