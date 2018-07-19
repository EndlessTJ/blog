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
	app.post('/admin/addtags',require('./admin/post/addTags'));
	app.post('/admin/users',require('./admin/post/addUser'));


	app.post('/updatepost/:postid', require('./admin/post/updatepost'));
	// app.post('/admin/postlist',require('./admin/post/postList'));

	// 前台路由
	/*页面请求路由*/
	app.get('/', require('./front-end/views/index'));
	app.get('/index', require('./front-end/views/index'));
	app.get('/archive', require('./front-end/views/index'));
	app.get('/label', require('./front-end/views/index'));
	app.get('/readme', require('./front-end/views/index'));
	app.get('/post/:id', require('./front-end/views/index'));
	/*数据请求路由*/
	app.post('/getPost',require('./front-end/post/getPosts')); //获取摘要内容
	app.post('/getarticle/:id',require('./front-end/post/getArticle')); //获取文章内容
};