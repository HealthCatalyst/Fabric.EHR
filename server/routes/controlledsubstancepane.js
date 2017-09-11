var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/:patientId', function(req, res, next) {
    var patientId = req.params.patientId;
    var controlledSubstances = [];
    var patient = {};

    sqlclient.loadPatient(patientId, function(err, rows) {

        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }

        patient = rows[0];


        sqlclient.loadControlledSubstances(patientId, function(err, rows) {
            if (err) {
                console.log(err);
                res.status(500).send(err);
                return;
            }

            controlledSubstances = rows;

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
module.exports = router;