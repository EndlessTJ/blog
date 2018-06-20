const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId  =  Schema.Types.ObjectId;
const TagSchema = new Schema({
	label: {type: String, required: true, trim: true, index: true},
	post: [{type: ObjectId, ref: 'Post'}],
	CreateDate: {type: Date, required: true},
});
/*TagSchema.virtual('adminMessage').get(function () {
	return {
		_id: this._id
	}
});*/


module.exports = mongoose.model('Tag', TagSchema);

