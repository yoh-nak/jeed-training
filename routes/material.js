var config = require('../config.json');

exports.material = function(req, res){
	res.render('material/material-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};


exports.phonegap = function(req, res){
	res.render('material/phonegap/phonegap-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};