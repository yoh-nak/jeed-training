define = require("../models/define")

require("jade").filters.code = (block) ->
  block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

exports.js = (req, res) ->
	res.render "js/js-" + req.params.id,
		title: define.title
		instructor: define.instructor

#enchant.js
exports.enchant = (req, res) ->
	res.render "js/enchant/enchant-" + req.params.id,
		title: define.title
		instructor: define.instructor

#Web API
exports.webapi = (req, res) ->
	res.render "js/webapi/webapi-" + req.params.id,
		title: define.title
		instructor: define.instructor

#Web API XMLデータ
exports.webapiXML = (req, res) ->
	res.header "Content-Type", "text/xml"
	res.render "js/webapi/xml-" + req.params.id, {}

#HTML5 API
exports.html5 = (req, res) ->
	res.render "js/html5/html5-" + req.params.id,
		title: define.title
		instructor: define.instructor

#Canvas
exports.canvas = (req, res) ->
	res.render "js/canvas/canvas" + req.params.id + req.params.format,
		title: define.title
		instructor: define.instructor
		pretty: true

#Library
exports.library = (req, res) ->
	res.render "js/library/library" + req.params.id + req.params.format,
		title: define.title
		instructor: define.instructor
		pretty: true

#JavaScriptレシピ
exports.recipe = (req, res) ->
	res.render "js/recipe/recipe1-" + req.params.id,
		title: define.title
		instructor: define.instructor

