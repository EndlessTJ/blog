const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TJblog');
const db = mongoose.connection;


const Tips = `
---------------------------------------------
TJblog 后台启动完成，数据库已连接
---------------------------------------------
`;
db.on('error',() => console.log('数据库连接错误'));
db.on('open', () => console.log(Tips));
module.exports = db ;
