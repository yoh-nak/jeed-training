define = require("../libs/define")

exports.material = (req, res) ->
	res.render "material/material-" + req.params.id + req.params.format,
		title: define.title
		instructor: define.instructor
		pretty: true
