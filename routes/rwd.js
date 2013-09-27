var config = require('../config.json');

exports.rwd = function(req, res){
	res.render('rwd/rwd-' + req.params.id + '.jade', {
	  	title: config.title,
	  	instructor: config.instructor
	});
};