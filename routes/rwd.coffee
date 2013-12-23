config = require("../config.json")
exports.rwd = (req, res) ->
	res.render "rwd/rwd-" + req.params.id + ".jade",
		title: config.title
		instructor: config.instructor
		pretty: true

