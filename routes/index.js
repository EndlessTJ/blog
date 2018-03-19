
module.exports = routes = (app) => {
  app.get('/index', require('./views/index'));
  //app.get('/users', require('./views/users'));
  app.post('/adduser', require('./post/addUser'))
};