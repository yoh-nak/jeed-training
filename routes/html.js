var config = require('../config.json');

exports.html = function(req, res){
	//res.render('html/html' + req.params.id + req.params.format, {
	res.render('html/html' + req.params.id + '.jade', {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true
	});
};