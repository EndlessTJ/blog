var multer = require('multer');
var formdata = multer();
module.exports = routes = (app) => {
  app.get('/index', require('./views/index'));
  //app.get('/users', require('./views/users'));
  app.post('/adduser', formdata.array(),require('./post/addUser'))
};