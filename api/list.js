var connection = require('../config/database');
module.exports.companyList = function (req, res) {
	var limit = 10
	var offset = 0

	if (req.query.limit && req.query.offset) {
		limit = req.query.limit,
			offset = req.query.offset
	}

	connection.query('SELECT * FROM `companies` LIMIT ' + limit + ' OFFSET ' + offset + ''
		, function (error, results) {
			if (error) {
				res.send(error)
			} else {
				res.send(results);
			}
		});
}