
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchma = new Schema({
	username: {type: 'String', required: true, trim: true, index: true},
	password: {type: 'String', required: true, trim: true},
	role: {type: 'String', default: 'admin'},
	createDate: {type: Date, required: true},
	activeDate: {type: Date, required: true}
});
UserSchma.virtual('adminMessage').get(function () {
	return {
		_id: this._id,
		role: this.role,
	}
});

module.exports =mongoose.model('Users', UserSchma);

