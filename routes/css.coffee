define = require("../libs/define")

exports.css = (req, res) ->
	res.render "css/css" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

