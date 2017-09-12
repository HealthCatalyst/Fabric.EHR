var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var insightspane = require('./routes/insightspane');
var controlledsubstancepane = require('./routes/controlledsubstancepane');
var ehrframe = require('./routes/ehrframe');

var app = express();
app.set('port', process.env.PORT || 3000);

app.locals.moment = require('moment');

process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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
app.use('/fabricpane', insightspane);
app.use('/controlledsubstancepane', controlledsubstancepane);
app.use('/ehrframe', ehrframe);

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
    res.render('error');
});

module.exports = app;