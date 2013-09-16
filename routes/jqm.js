var config = require('../config.json');

exports.jqm = function(req, res){
	res.render('jqm/jqm-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};