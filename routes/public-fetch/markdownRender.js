const Marked = require('marked');
const hljs = require('highlight.js');
// http 请求处理
module.exports = function (req, res) {
	const content = {};
	content.section = 'renderMarkDown';
	content.data = {
		html: ''
	};
	content.success = false;
	content.code = '';
	const data = req.body.mdData;
	Marked.setOptions({
		headerIds: true,
		highlight: function (code) {
			return hljs.highlightAuto(code).value
		},
		headerPrefix: '',
		sanitize: true
	});

  Marked(data, (err, data) => {
		if (err) {
			content.code = 'RENDER_ERROR';
			console.log('markdown渲染错误');
			return res.json(content)
		}
		content.data.html = data;
		content.success = true;
		content.code = 'MD_RENDER';
	  return res.json(content)
	});
};

