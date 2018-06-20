const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CommentSchema = new Schema({
	user: {type: ObjectId, ref: 'User', required: true},
	post: {type: ObjectId, ref: 'Post'},
	content: {type: 'String', required: true, trim: true},
	reply: [{type: ObjectId, ref: 'Comment'}],
	CreateDate: {type: Date, required: true},
});
/*CommentSchema.virtual('adminMessage').get(function () {
	return {
		_id: this._id
	}
});*/


module.exports = mongoose.model('Comment', CommentSchema);

