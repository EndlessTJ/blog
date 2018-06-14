const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
	label: {type: String, required: true, trim: true, index: true},
	post: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	CreateDate: {type: Date, required: true},
});
/*TagSchema.virtual('adminMessage').get(function () {
	return {
		_id: this._id
	}
});*/


module.exports = mongoose.model('Tag', TagSchema);

