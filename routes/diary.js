var config = require('../config.json');

exports.diary = function(req, res){
	res.render('diary/diary' + req.params.id + req.params.format, {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true
	});
};
