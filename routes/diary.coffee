define = require("../libs/define")

exports.diary = (req, res) ->
	res.render "diary/diary" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

