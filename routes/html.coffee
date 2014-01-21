define = require("../libs/define")

require("jade").filters.code = (block) ->
  block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.html = (req, res) ->
	res.render "html/html" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

