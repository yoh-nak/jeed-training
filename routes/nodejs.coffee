define = require("../models/define")
exports.nodejs = (req, res) ->
	#res.render "nodejs/nodejs" + req.params.id + req.params.format,
	res.render "nodejs/nodejs" + req.params.id + ".jade",
		title: define.title
		instructor: define.instructor
		pretty: true

