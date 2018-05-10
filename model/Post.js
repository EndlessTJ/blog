const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const POstSchma = new Schema({
	title: {type: 'String', required: true, trim: true, index: true},
	author: {type: 'String', required: true},
	CreateDate: {type: Date, required: true},
	UpdateDate: {type: Date, required: true},
	brief: {type: 'String'},
	content: {type: 'String', required: true},
	topped: {type: Boolean, default: false},
	recommend: {type: Boolean, default: false},
});
POstSchma.virtual('adminMessage').get(function () {
	return {
		_id: this._id
	}
});


module.exports = mongoose.model('Posts', POstSchma);

