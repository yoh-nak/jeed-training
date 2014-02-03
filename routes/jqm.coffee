define = require("../libs/define")

exports.jqm = (req, res) ->
	res.render "jqm/jqm" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

