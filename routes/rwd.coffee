define = require("../libs/define")

###
require("jade").filters.code = (block) ->
	block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"
###

exports.rwd = (req, res) ->
	res.render "rwd/rwd" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

exports.bootstrap = (req, res) ->
	res.render "rwd/bootstrap/bootstrap" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true
