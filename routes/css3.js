var config = require('../config.json');

exports.css3 = function(req, res){
	res.render('css3/css3-' + req.params.id + '.jade', {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true
	});
};