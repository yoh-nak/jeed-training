var config = require('../config.json');

exports.diary = function(req, res){
	res.render('diary/diary-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};
