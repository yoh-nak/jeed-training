define = require("../libs/define")

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

exports.genymotion = (req, res) ->
	res.render "others/genymotion/genymotion" + req.params.id,
		title: define.title
		instructor: define.instructor