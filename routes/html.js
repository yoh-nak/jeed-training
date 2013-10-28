var config = require('../config.json');

exports.html = function(req, res){
	res.render('html/html' + req.params.id + req.params.format, {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true
	});
};