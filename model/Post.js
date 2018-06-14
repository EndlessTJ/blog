const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: {type: String, required: true, trim: true, index: true},
	author: {type: Schema.Types.ObjectId, ref: 'User'},
	content: {type: 'String', required: true},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
	link: {type: String, required: true, trim: true},
	topped: {type: Boolean, default: false},
	recommend: {type: Boolean, default: false},
	CreateDate: {type: Date, required: true},
	UpdateDate: [{type: Date, required: true}],
});
PostSchema.virtual('adminMessage').get(function () {
	return {
		_id: this._id
	}
});


module.exports = mongoose.model('Post', PostSchema);

