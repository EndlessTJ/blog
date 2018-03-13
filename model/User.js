const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchma = new Schema({
	username: 'String',
	password: 'String',
	userid: 'String',
	status: 'String',
	Invitationcode: 'String'
});

module.exports =mongoose.model('User', UserSchma);
