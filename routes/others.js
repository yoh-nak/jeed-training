var config = require('../config.json');

exports.others = function(req, res){
	//res.render('others/others' + req.params.id + req.params.format, {
	res.render('others/others' + req.params.id + '.jade', {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true	
	});
};