const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId  =  Schema.Types.ObjectId;
const TagSchema = new Schema({
	TagName: {type: String, required: true, trim: true, index: true},
	post: [{type: ObjectId, ref: 'Post'}],
	user: { type: ObjectId, ref: 'User'},
	CreateDate: {type: Date, required: true},
});
TagSchema.virtual('tagMessage').get(function () {
	return {
		_id: this._id,
		TagName: this.TagName,
		post: this.post,
		createDate: this.CreateDate,
		user: this.user
	}
});


module.exports = mongoose.model('Tag', TagSchema);

