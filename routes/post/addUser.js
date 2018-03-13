var User = require('../../model/User');

module.exports = function (req, res) {

		User.create(req.body,function (err) {
			if (err){
				console.log(err);
				return false
			}
			console.log('插入成功')
		});
		res.send('ok')
};

