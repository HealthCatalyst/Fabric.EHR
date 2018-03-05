var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/:patientId', function(req, res, next) {
    var patientId = req.params.patientId;
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
        res.render('sepsis', {
            title: 'Optimizing Choices',
            patientId: patientId, // 'Jim Jones',
            patientrisk: patientrisk,
            patientname: "Jim Jones"
        });
    });
});

// host.docker.internal

module.exports = router;