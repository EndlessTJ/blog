const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TJblog');
const db = mongoose.connection;


// db.on('open',() => console.log('TJblog数据库链接成功！'));
db.on('error',() => console.log('数据库连接错误'));
db.on('open', () => console.log('TJblog数据库链接成功'));
module.exports = db ;
