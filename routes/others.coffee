define = require("../libs/define")

require("jade").filters.code = (block) ->
  block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.others = (req, res) ->
	res.render "others/others" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

exports.git = (req, res) ->
	res.render "others/git/git" + req.params.id,
		title: define.title
		instructor: define.instructor

exports.vagrant = (req, res) ->
	res.render "others/vagrant/vagrant" + req.params.id,
		title: define.title
		instructor: define.instructor

exports.gennymotion = (req, res) ->
	res.render "others/gennymotion/gennymotion" + req.params.id,
		title: define.title
		instructor: define.instructor