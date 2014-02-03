define = require("../libs/define")

exports.html = (req, res) ->
	res.render "html/html" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

