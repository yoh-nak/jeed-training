define = require("../libs/define")

exports.mobile = (req, res) ->
	res.render "mobile/mobile" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true
