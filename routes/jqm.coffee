define = require("../libs/define")

require("jade").filters.code = (block) ->
  block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.jqm = (req, res) ->
	res.render "jqm/jqm" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

