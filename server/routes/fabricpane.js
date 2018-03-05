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

    res.render('fabricpane', {
        title: 'Optimizing Choices',
        patientId: patientId, // 'Jim Jones',
        patient: patient,
    });

});

module.exports = router;