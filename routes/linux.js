var config = require('../config.json');

exports.linux = function(req, res){
	res.render('linux/linux-' + req.params.id + '.jade', {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true	
	});
};