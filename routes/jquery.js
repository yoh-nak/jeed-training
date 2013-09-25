var config = require('../config.json');

exports.jquery = function(req, res){
	res.render('jquery/jquery-' + req.params.id + '.jade', {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true
	});
};