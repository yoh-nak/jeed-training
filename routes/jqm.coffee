#config = require("../config.json")
define = require("../models/define")
exports.jqm = (req, res) ->
	#res.render "jqm/jqm-" + req.params.id + ".jade",
	res.render "jqm/jqm" + req.params.id + ".jade",
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true

