define = require("../libs/define")

###
require("jade").filters.code = (block) ->
	block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"
###

exports.mobile = (req, res) ->
	res.render "mobile/mobile" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true
