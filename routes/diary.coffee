config = require("../config.json")
exports.diary = (req, res) ->
	
	#res.render('diary/diary' + req.params.id + req.params.format, {
	res.render "diary/diary" + req.params.id + ".jade",
		title: config.title
		instructor: config.instructor
		pretty: true

