var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/fabricpane/:patientId', function(req, res, next) {
    var patientId = req.params.patientId;
    var insightRows = [];
    var controlledSubstances = [];
    var registries = [];

    sqlclient.loadPatientInsights(patientId, function(err, rows) {

        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }
        insightRows = rows;

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
                        insights: insightRows,
                        controlledSubstances: controlledSubstances,
                        registries: registries
                    });
                }
            });
        });
    });
});

module.exports = router;