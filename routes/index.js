var multer = require('multer');
var formdata = multer();
module.exports = routes = (app) => {
  app.get('/index', require('./views/index'));
  //app.get('/users', require('./views/users'));
  app.post('/login', formdata.array(),require('./post/login'))
};