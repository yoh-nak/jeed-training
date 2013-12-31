config = require("../config.json")
exports.jqm = (req, res) ->
	#res.render "jqm/jqm-" + req.params.id + ".jade",
	res.render "jqm/jqm" + req.params.id + ".jade",
		title: config.title
		instructor: config.instructor
		pretty: true

