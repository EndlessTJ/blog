
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {type: String, required: true, trim: true, index: true},
	password: {type: String, required: true, trim: true},
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	nickname: {type: String,trim: true},
	salt: {type: String, required: true, trim: true},
	role: {type: String, trim: true, default: 'user'},
	automaticLogin: {type: Boolean},
	delPrivilege: {type: Boolean, default: false},
	editPrivilege: {type: Boolean, default: false},
	accessAdmin: {type: Boolean, default: false},
	createDate: {type: Date, required: true},
	activeDate: [{type: Date, required: true}]
});
UserSchema.virtual('adminMessage').get(function () {
	return {
		_id: this._id,
		role: this.role,
	}
});


module.exports = mongoose.model('User', UserSchema);

