define = require("../models/define")

require("jade").filters.code = (block) ->
  block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.others = (req, res) ->
	res.render "others/others" + req.params.id + ".jade",
		title: define.title
		instructor: define.instructor
		pretty: true

