const express = require('express');
const app = express();
require('setimmediate');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send('Hello World!');
});

//app.use('/fhir-app', express.static('simple-fhir-app'));
app.use('/fhir-app', express.static('smartonfhir/fhir-app'));

/* app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
}); */

var myLogger = function(req, res, next) {
    console.log(req);
    next();
};

app.use(myLogger);

console.log('Listening on ' + app.get('port') + " env port=" + process.env.PORT);

app.listen(app.get('port'));