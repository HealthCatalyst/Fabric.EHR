var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    sqlclient.loadPatientInsights(1, function(err, rows) {
        if (err) {
            res.sendStatus(500).json(err);
        } else {
            res.render('index', {
                title: 'Fabric Pane',
                patientName: 'Jim Jones',
                insights: rows
            });
        }
    });
});

module.exports = router;