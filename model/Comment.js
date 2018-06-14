const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
	post: {type: Schema.Types.ObjectId, ref: 'Post'},
	content: {type: 'String', required: true, trim: true},
	reply: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	CreateDate: {type: Date, required: true},
});
/*CommentSchema.virtual('adminMessage').get(function () {
	return {
		_id: this._id
	}
});*/


module.exports = mongoose.model('Comment', CommentSchema);

