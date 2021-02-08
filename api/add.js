var connection = require('../config/database');
require('dotenv').config()
module.exports.add = function (req, res) {
	var today = new Date();
	var company = {
		"name": req.body.name,
		"review": req.body.review,
		"rating": req.body.rating,
		"created_at": today,
		"updated_at": today
	}
	connection.query('INSERT INTO companies SET ?', company, function (error, results, fields) {
		if (error) {
			return res.status(500).send("Server error!");
		} else {
			res.json({
				status: true,
				data: results,
				message: 'user registered sucessfully'
			})
		}
	});
}
