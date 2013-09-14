var config = require('../config.json');

exports.js = function(req, res){
	res.render('js/js-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};