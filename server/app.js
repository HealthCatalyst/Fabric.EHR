var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
require('setimmediate');

var insightspane = require('./routes/insightspane');
var fabricpane = require('./routes/fabricpane');
var controlledsubstancepane = require('./routes/controlledsubstancepane');
var ehrframe = require('./routes/ehrframe');

var app = express();
app.set('port', process.env.PORT || 3000);

// var appInsights = require("applicationinsights");
// appInsights.setup("bebe0fcf-1bc1-4b8f-9d60-e6f6203e7764");
// appInsights.start();

app.locals.moment = require('moment');

process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// https://github.com/ericf/express-handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('Fabric.EHR demo');
});
app.use('/insightspane', insightspane);
app.use('/fabricpane', fabricpane);
app.use('/controlledsubstancepane', controlledsubstancepane);
app.use('/ehrframe', ehrframe);

//-- static resources --
app.use('/fhir-app', express.static('smartonfhir/fhir-app'));

app.use('/assets', express.static('assets'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

// -- dynamic routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', { layout: false, error: err });
});

module.exports = app;