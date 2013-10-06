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

//Web API XMLデータ
exports.webapiXML = function(req, res){
	res.header('Content-Type', 'text/xml');
	res.render('js/webapi/xml-' + req.params.id, {
		//
	});
};

//Library
exports.library = function(req, res){
	res.render('js/library/library-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};


//JavaScriptレシピ
exports.recipe = function(req, res){
	res.render('js/recipe/recipe1-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};