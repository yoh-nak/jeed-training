define = require("../libs/define")

###
require("jade").filters.code = (block) ->
	block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"
###

exports.mysql = (req, res) ->
	res.render "database/mysql/mysql" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

exports.mongodb = (req, res) ->
	res.render "database/mongodb/mongodb" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

exports.redis = (req, res) ->
	res.render "database/redis/redis" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

