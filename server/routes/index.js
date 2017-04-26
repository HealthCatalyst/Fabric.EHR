var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/:patientId', function(req, res, next) {
    var patientId = req.params.patientId;
    sqlclient.loadPatientInsights(patientId, function(err, rows) {
        if (err) {
            res.sendStatus(500).json(err);
        } else {
            res.render('index', {
                title: 'Fabric Pane',
                patientName: patientId, // 'Jim Jones',
                insights: rows
            });
        }
    });
});

module.exports = router;