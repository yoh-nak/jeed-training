var config = require('../config.json');

exports.css = function(req, res){
	//res.render('css/css' + req.params.id + req.params.format, {
	res.render('css/css' + req.params.id + '.jade', {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true
	});
};