const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
//引入路由
const routes = require('./routes');

// 链接数据库
const db = require('./public/lib/dbconnect');


const app = express();

// 设置static的options项
const stactOPtions = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['pug', 'htm', 'html'],
  index: false,
  redirect: false
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('EndlessTJ'));
app.use(express.static(path.join(__dirname, 'public'), stactOPtions));
app.use(express.static(path.join(__dirname, 'front-end/dist-local'), stactOPtions)); // 前端打包静态文件
app.use(express.static(path.join(__dirname, 'admin/dist-local'), stactOPtions)); // 后台打包文件文件

app.use(session({
  'secret': 'EndlessTJ',
  cookie: {
    'maxAge': 7200000
  },
  'name': 'user_id'
}));
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
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
