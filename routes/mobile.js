var config = require('../config.json');

exports.mobile = function(req, res){
	res.render('mobile/mobile-' + req.params.id + '.jade', {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true	
	});
};