var User = require('../../model/User');

module.exports = function (req, res) {
		console.log("数据",req.body);
		console.log("另一组数据",req.files);
		User.create(req.body,function (err) {
			if (err){
				console.log(err);
				return false
			}
			console.log('插入成功')
		});
		res.sendStatus(200);
};

