
const User = mongoose.model('User', UserSchema);
const hashObject = require('../routes/admin/hashPassword');


/*
* hash 函数
* */
function passwordHashSlat(userPassword) {
	const slat = hashObject.getRandomString(16);
	return hashObject.sha512(userPassword, slat);
}
const ps1 = passwordHashSlat('TJblog1994');
const ps2 = passwordHashSlat('DDblog1994');
let date = Date.now();
// 插入数据
let adminData = [
	{username: "EndlessTJ", password: ps1.passwordHash, nickname: 'tianjin', salt: ps1.salt, role: "admin", delPrivilege: true, editPrivilege: true, accessAdmin: true, createDate: date, activeDate: date},
	{username: "EndlessDD", password: ps2.passwordHash, nickname: '蛋蛋', salt: ps2.salt,role: "admin", delPrivilege: false, editPrivilege: true, accessAdmin: true,  createDate: date, activeDate: date}
];

/*
* 循环插入数据库
* */

User.create(adminData, (err) => {
	if (err){
		console.log(err);
		return false
	}
	console.log('插入成功')
});


