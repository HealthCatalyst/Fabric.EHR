var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    sqlclient.loadPatientInsights(1, function() {
        res.render('index', {
            title: 'Fabric Pane',
            patientName: 'Jim Jones',
            insights: ['High risk for readmission', 'Due for mammogram']
        });
    });
});

module.exports = router;