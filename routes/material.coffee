#config = require("../config.json")
define = require("../models/define")
exports.material = (req, res) ->
	res.render "material/material" + req.params.id + req.params.format,
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true

exports.git = (req, res) ->
	res.render "material/git/git1-" + req.params.id,
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor

exports.vagrant = (req, res) ->
	res.render "material/vagrant/vagrant1-" + req.params.id,
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor

exports.cordova = (req, res) ->
	res.render "material/cordova/cordova1" + req.params.id,
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor