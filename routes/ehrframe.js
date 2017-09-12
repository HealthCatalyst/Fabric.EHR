var express = require('express');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ehrframe', {
        title: 'Myopic',
        urlehrpane: '/fabricpane/1'
    });
});

module.exports = router;