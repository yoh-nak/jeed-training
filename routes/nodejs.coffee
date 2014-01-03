config = require("../config.json")
exports.nodejs = (req, res) ->
	#res.render "nodejs/nodejs" + req.params.id + req.params.format,
	res.render "nodejs/nodejs" + req.params.id + ".jade",
		title: config.title
		instructor: config.instructor
		pretty: true

