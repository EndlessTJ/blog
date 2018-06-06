var multer = require('multer');
var formdata = multer();
module.exports = routes = (app) => {
	/*
	* 全局路由匹配
	* */
	// 后台路由
	app.get('/admin', require('./admin/views/index'));
	app.get('/admin/*', require('./admin/views/index'));
	app.post('/admin/login', formdata.array(),require('./admin/post/login'));
	app.post('/admin/islogin', formdata.array(),require('./admin/post/islogin'));
	app.post('/admin/addpost',require('./admin/post/addPosts'));

	// 前台路由
	app.get('/', require('./front-end/views/index'));
	app.get('/index', require('./front-end/views/index'));
	app.get('/archive', require('./front-end/views/index'));
	app.get('/label', require('./front-end/views/index'));
	app.get('/readme', require('./front-end/views/index'));
	app.get('/post/:id', require('./front-end/views/index'));
};