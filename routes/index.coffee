define = require("../libs/define")

exports.index = (req, res) ->
	res.render "index",
		title: define.title
		instructor: define.instructor
		pretty: true
	return

