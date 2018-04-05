var express = require('express');

var sqlclient = require('../sqlclient');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var action = req.params.action;

    var insightRows = [];

    var host = req.headers.host;
    console.log("host: " + host);
    //    console.log(req.headers);


    sqlclient.loadRisk(host, 1, function(err, rows) {

        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }


            res.render('worklist', {
                title: 'Optimizing Choices',
                layout: 'worklist'
            });
    });
});

// host.docker.internal

module.exports = router;