var config = require('../config.json');

exports.jqm = function(req, res){
	res.render('jqm/jqm-' + req.params.id + '.jade', {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true	
	});
};