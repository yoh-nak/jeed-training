define = require("../libs/define")

exports.nodejs = (req, res) ->
	res.render "nodejs/nodejs" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

