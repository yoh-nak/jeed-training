#config = require("../config.json")
define = require("../models/define")
exports.rwd = (req, res) ->
	#res.render "rwd/rwd-" + req.params.id + ".jade",
	res.render "rwd/rwd" + req.params.id + ".jade",
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true

