const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchma = new Schema({
	username: 'string',
	password: 'string',

});