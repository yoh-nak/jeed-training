#config = require("../config.json")
define = require("../models/define")
exports.index = (req, res) ->
	res.render "index.jade",
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true
	return

