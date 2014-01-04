define = require("../models/define")

require("jade").filters.code = (block) ->
  block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.jquery = (req, res) ->
	#res.render "jquery/jquery" + req.params.id + ".jade",
	res.render "jquery/jquery" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

