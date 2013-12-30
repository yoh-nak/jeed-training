config = require("../config.json")
exports.jquery = (req, res) ->
	#res.render "jquery/jquery-" + req.params.id + ".jade",
	res.render "jquery/jquery" + req.params.id + ".jade",
		title: config.title
		instructor: config.instructor
		pretty: true

