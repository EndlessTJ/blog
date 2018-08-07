const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const PostSchema = new Schema({
	title: {type: String, required: true, trim: true, index: true, unique: true},
	author: {type: ObjectId, ref: 'User'},
	content: {type: 'String', required: true},
	comments: [{type: ObjectId, ref: 'Comment'}],
	tags: [{type: ObjectId, ref: 'Tag'}],
	postState:{type:'String', required: true, default: 'draft'},
	link: {type: String, required: true, trim: true},
	topped: {type: Boolean, default: false},
	recommend: {type: Boolean, default: false},
	CreateDate: {type: Date, required: true},
	UpdateDate: {
		type: [{type: Date, required: true}],
		validate: [arrayLimit, '{PATH} exceeds the limit of 100']
	}
});
function arrayLimit(value) {
	return value.length <= 100
}
PostSchema.virtual('postMessage').get(function () {
	return {
		_id: this._id,
		title: this.title,
		author: this.author,
		content: this.content,
		tags: this.tags,
		link: this.link,
		publishData: this.UpdateDate,
		topped: this.topped,
		recommend: this.recommend,
		postState: this.postState
	}
});


module.exports = mongoose.model('Post', PostSchema);

