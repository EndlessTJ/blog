const path = require('path');

module.exports = function (req, res) {
	res.sendFile(path.join(process.cwd(), 'admin/dist-local', 'index.html'));
};

