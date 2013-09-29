var config = require('../config.json');

exports.js = function(req, res){
	res.render('js/js-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};

//enchant.js
exports.enchant = function(req, res){
	res.render('js/enchant/enchant-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};

//Web API
exports.webapi = function(req, res){
	res.render('js/webapi/webapi-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};

//Library
exports.library = function(req, res){
	res.render('js/library/library-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};