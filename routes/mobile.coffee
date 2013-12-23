config = require("../config.json")
exports.mobile = (req, res) ->
	res.render "mobile/mobile" + req.params.id + req.params.format,
		title: config.title
		instructor: config.instructor
		pretty: true

