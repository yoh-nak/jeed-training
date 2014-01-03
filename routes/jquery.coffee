#config = require("../config.json")
define = require("../models/define")
exports.jquery = (req, res) ->
	#res.render "jquery/jquery-" + req.params.id + ".jade",
	res.render "jquery/jquery" + req.params.id + ".jade",
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true

