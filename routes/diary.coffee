#config = require("../config.json")
define = require("../models/define")
exports.diary = (req, res) ->
	
	#res.render('diary/diary' + req.params.id + req.params.format, {
	res.render "diary/diary" + req.params.id + ".jade",
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true

