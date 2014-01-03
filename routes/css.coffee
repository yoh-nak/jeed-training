#config = require("../config.json")
define = require("../models/define")
exports.css = (req, res) ->
	
	#res.render('css/css' + req.params.id + req.params.format, {
	res.render "css/css" + req.params.id + ".jade",
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true

