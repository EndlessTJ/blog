const Post = require("../../../model/Post");



module.exports = function (req, res) {
	const content = {}
	Post.find((err, data) => {
		console.log(data)
	})
}