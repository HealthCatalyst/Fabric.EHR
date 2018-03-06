var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/:patientId/:action', function(req, res, next) {
    var patientId = req.params.patientId;
    var action = req.params.action;

    var insightRows = [];
    var patient = {};
    var patientrisk = {};

    var host = req.headers.host;
    console.log("host: " + host);
    //    console.log(req.headers);

    console.log("patientId:", patientId);

    sqlclient.loadRisk(host, patientId, function(err, rows) {

        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }

        if (typeof rows !== 'undefined' && rows.length > 0) {
            patientrisk = rows[0];
            console.info(patientrisk);
        }

        var patientRiskLevel = "Low";
        var patientHasHighRisk = false;
        if (patientrisk.PredictedProbNBR.value > 0.30) {
            patientRiskLevel = "High";
            patientHasHighRisk = true;
        }

        var isCalculatingRisk = false;
        if (action === "calculating") { isCalculatingRisk = true; }

        res.render('sepsis', {
            title: 'Optimizing Choices',
            patientId: patientId, // 'Jim Jones',
            patientrisk: patientrisk,
            patientname: "Jim Jones",
            patientHasHighRisk: patientHasHighRisk,
            isCalculatingRisk: isCalculatingRisk
        });
    });
});

// host.docker.internal

module.exports = router;