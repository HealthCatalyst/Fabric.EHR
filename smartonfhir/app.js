const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8000);

app.get('/', function(req, res) {
    res.send('Hello World!');
});

//app.use('/fhir-app', express.static('simple-fhir-app'));
app.use('/fhir-app', express.static('fhir-app'));

/* app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
}); */

var myLogger = function(req, res, next) {
    console.log('LOGGED');
    next();
};

app.use(myLogger);

app.listen(app.get('port'));