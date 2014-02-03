define = require("../libs/define")

###
require("jade").filters.code = (block) ->
	block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"
###

exports.diary = (req, res) ->
	res.render "diary/diary" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

