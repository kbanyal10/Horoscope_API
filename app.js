var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addAdminDataRoute = require('./routes/addAdminDataRoute');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var horoscopeRouter = require('./routes/horoscopeRouter');
var mongoose = require('mongoose');
const expressValidator = require('express-validator');

var app = express();

mongoose
  .connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected on port 3000'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(expressValidator());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD
app.use('/horoscope', horoscopeRouter);
=======
app.use('/horoscope/', horoscopeRouter);
>>>>>>> 4bcc602450adfc7b85c6c89d189f030c9e7a2962
app.use('/horoscope/admin', addAdminDataRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
<<<<<<< HEAD
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
=======
  next(createError(404));
>>>>>>> 4bcc602450adfc7b85c6c89d189f030c9e7a2962
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
