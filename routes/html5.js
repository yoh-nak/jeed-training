var config = require('../config.json');

exports.html5 = function(req, res){
	res.render('html5/html5-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};