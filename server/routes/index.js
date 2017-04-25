var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Fabric Pane', patientName: 'Jim Jones', insights: ['High risk for readmission', 'Due for mammogram'] });
});

module.exports = router;