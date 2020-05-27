var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var router = require('./routes/routes');
var bcrypt =require('bcrypt');
var session = require('express-session')
var cors = require('cors');

var passport = require('passport');
// var passportSetup=require('./config/passport');
require('./config/passport')(passport);

var app = express();
app.use(cors()) ;
var key = require('./config/keys');


// connect MongoDB
mongoose.connect(key.mongo.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("MONGO CONNECTED!!") })
  .catch((err) => { console.log(err) });




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())



app.use('/', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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
