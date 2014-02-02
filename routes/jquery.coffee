define = require("../libs/define")

require("jade").filters.code = (block) ->
	block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.jquery = (req, res) ->
	res.render "jquery/jquery" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

exports.jqueryui = (req, res) ->
	res.render "jquery/jqueryui/jqueryui" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true


