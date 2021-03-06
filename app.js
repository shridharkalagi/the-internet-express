var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var uploadRouter = require('./routes/upload');
var downloadRouter = require('./routes/download');
var downloadSecureRouter = require('./routes/download_secure');
var horizontalSliderRouter = require('./routes/horizontal_slider');
var jqueryuiRouter = require('./routes/jqueryui');
var windowsRouter = require('./routes/windows');
var dropdownRouter = require('./routes/dropdown');
var basicAuthRouter = require('./routes/basic_auth');
var dynamicLoadingRouter = require('./routes/dynamic_loading');
var dragAndDropRouter = require('./routes/drag_and_drop');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/upload', uploadRouter)
app.use('/download', downloadRouter);
app.use('/download_secure', downloadSecureRouter);
app.use('/horizontal_slider', horizontalSliderRouter);
app.use('/jqueryui', jqueryuiRouter);
app.use('/windows', windowsRouter);
app.use('/dropdown', dropdownRouter);
app.use('/basic_auth', basicAuthRouter);
app.use('/dynamic_loading', dynamicLoadingRouter);
app.use('/drag_and_drop', dragAndDropRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
