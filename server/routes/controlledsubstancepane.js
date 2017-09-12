var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/:patientId', function(req, res, next) {
    var patientId = req.params.patientId;
    var controlledSubstances = [];
    var patient = {};

    var host = req.headers.host;
    console.log("host: " + host);

    sqlclient.loadPatient(host, patientId, function(err, rows) {

        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }

        patient = rows[0];


        sqlclient.loadControlledSubstances(host, patientId, function(err, rows) {
            if (err) {
                console.log(err);
                res.status(500).send(err);
                return;
            }

            controlledSubstances = rows;

            controlledSubstances.forEach(function(element) {
                element.controlledSubstanceItems = [];
            });

            sqlclient.loadControlledSubstanceItems(host, patientId, function(err, rows) {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                    return;
                }

                // now merge in the data into insightRows
                rows.forEach(function(element) {
                    var controlledSubstanceId = element.ControlledSubstanceId.value;
                    var controlledSubstance = controlledSubstances.find(function(item) {
                        return item.ControlledSubstanceId.value === controlledSubstanceId;
                    });
                    controlledSubstance.controlledSubstanceItems.push(element);
                });

                res.render('controlledsubstance', {
                    title: 'Controlled Substances',
                    patientName: patientId, // 'Jim Jones',
                    urltoinsightspane: '/fabricpane/' + patientId,
                    patient: patient,
                    controlledSubstances: controlledSubstances
                });
            });
        });
    });
});
module.exports = router;