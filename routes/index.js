var multer = require('multer');
var formdata = multer();
module.exports = routes = (app) => {
  /*
  * 后端全局路由匹配
  * */
  app.get('/', require('./views/index'));
  app.get('/main', require('./views/index'));
  app.get('/login', require('./views/index'));
  app.post('/login', formdata.array(),require('./post/login'));
  app.post('/islogin', formdata.array(),require('./post/islogin'))
};