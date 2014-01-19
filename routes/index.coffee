define = require("../libs/define")

require("jade").filters.code = (block) ->
  block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.index = (req, res) ->
	res.render "index.jade",
		title: define.title
		instructor: define.instructor
		pretty: true
	return

