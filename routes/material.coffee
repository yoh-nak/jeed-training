define = require("../models/define")

require("jade").filters.code = (block) ->
  block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.material = (req, res) ->
	res.render "material/material" + req.params.id + req.params.format,
		title: define.title
		instructor: define.instructor
		pretty: true

exports.git = (req, res) ->
	res.render "material/git/git1-" + req.params.id,
		title: define.title
		instructor: define.instructor

exports.vagrant = (req, res) ->
	res.render "material/vagrant/vagrant1-" + req.params.id,
		title: define.title
		instructor: define.instructor

exports.cordova = (req, res) ->
	res.render "material/cordova/cordova1" + req.params.id,
		title: define.title
		instructor: define.instructor