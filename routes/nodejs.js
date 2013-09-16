var config = require('../config.json');

exports.nodejs = function(req, res){
	res.render('nodejs/nodejs-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};