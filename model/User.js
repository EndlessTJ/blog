
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
	username: {type: String, required: true, trim: true, index: true},
	password: {type: String, required: true, trim: true},
	posts: [{type: ObjectId, ref: 'Post'}],
	comments: [{type: ObjectId, ref: 'Comment'}],
	nickname: {type: String,trim: true},
	isDisabled: {type: Boolean, default: false},
	salt: {type: String, required: true, trim: true},
	role: {type: String, trim: true, default: 'user'},
	automaticLogin: {type: Boolean, default: false},
	delPrivilege: {type: Boolean, default: false},
	editPrivilege: {type: Boolean, default: false},
	accessAdmin: {type: Boolean, default: false},
	createDate: {type: Date, required: true},
	activeDate: {
		type: [{type: Date, required: true}],
		validate: [arrayLimit, '{PATH} exceeds the limit of 100']
	}
});
function arrayLimit(value) {
	return value.length <= 100
}
UserSchema.virtual('adminMessage').get(function () {
	return {
		_id: this._id,
		username: this.username,
		nickname: this.nickname,
		delPrivilege: this.delPrivilege,
		editPrivilege: this.editPrivilege,
		accessAdmin: this.accessAdmin,
		activeDate: this.activeDate,
		role: this.role,
		isDisabled: this.isDisabled
	}
});


module.exports = mongoose.model('User', UserSchema);

