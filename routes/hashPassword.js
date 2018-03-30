const crypto = require('crypto');
module.exports = {
	/*
* 获取salt数据字符串
* **/
	getRandomString : function (length) {
		return crypto.randomBytes(Math.ceil(length/2))
			.toString('hex')
			.slice(0, length)
	},

/*
* 加密用户密码，使用sha512
* **/

	sha512 : function (password, salt) {
		const hash = crypto.createHmac('sha512', salt);
		hash.update(password);
		const value = hash.digest('hex');
		return {
			salt: salt,
			passwordHash: value
		}
	}
};