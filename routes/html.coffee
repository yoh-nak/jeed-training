#config = require("../config.json")
define = require("../models/define")
exports.html = (req, res) ->
	
	#res.render('html/html' + req.params.id + req.params.format, {
	res.render "html/html" + req.params.id + ".jade",
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true

