define = require("../models/define")

require("jade").filters.code = (block) ->
  block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.nodejs = (req, res) ->
	res.render "nodejs/nodejs" + req.params.id + ".jade",
		title: define.title
		instructor: define.instructor
		pretty: true

