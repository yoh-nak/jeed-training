#config = require("../config.json")
define = require("../models/define")
exports.mobile = (req, res) ->
	#res.render "mobile/mobile" + req.params.id + req.params.format,
	res.render "mobile/mobile" + req.params.id + ".jade",
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true
