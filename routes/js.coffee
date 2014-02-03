define = require("../libs/define")

###
require("jade").filters.code = (block) ->
	block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"
###

exports.js = (req, res) ->
	res.render "js/js-" + req.params.id + req.params.format,
		title: define.title
		instructor: define.instructor

#enchant.js
exports.enchant = (req, res) ->
	res.render "js/enchant/enchant" + req.params.id,
		title: define.title
		instructor: define.instructor

#Web API
exports.webapi = (req, res) ->
	res.render "js/webapi/webapi-" + req.params.id + req.params.format,
		title: define.title
		instructor: define.instructor

#Web API XMLデータ
exports.webapiXML = (req, res) ->
	res.header "Content-Type", "text/xml"
	res.render "js/webapi/xml-" + req.params.id, {}

#HTML5 API
exports.html5 = (req, res) ->
	res.render "js/html5/html5-" + req.params.id + req.params.format,
		title: define.title
		instructor: define.instructor

#Canvas
exports.canvas = (req, res) ->
	res.render "js/canvas/canvas" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#AngularJS
exports.angular = (req, res) ->
	res.render "js/angular/angular" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#Cordva
exports.cordova = (req, res) ->
	res.render "js/cordova/cordova" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#RequireJS
exports.requirejs = (req, res) ->
	res.render "js/require/require" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#Underscore.js
exports.underscore = (req, res) ->
	res.render "js/underscore/underscore" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#json2.js
exports.json2js = (req, res) ->
	res.render "js/json2js/json2js" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#Jasmine
exports.jasmine = (req, res) ->
	res.render "js/jasmine/jasmine" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#Jasmine
exports.jsdoc = (req, res) ->
	res.render "js/jsdoc/jsdoc" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#Library
exports.library = (req, res) ->
	res.render "js/library/library" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#Framework
exports.framework = (req, res) ->
	res.render "js/framework/framework" + req.params.id,
		title: define.title
		instructor: define.instructor
		pretty: true

#JavaScriptレシピ
exports.recipe = (req, res) ->
	res.render "js/recipe/recipe1-" + req.params.id,
		title: define.title
		instructor: define.instructor

