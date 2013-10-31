var config = require('../config.json');

exports.nodejs = function(req, res){
	res.render('nodejs/nodejs' + req.params.id + req.params.format, {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true
	});
};