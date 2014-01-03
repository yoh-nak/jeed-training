#config = require("../config.json")
define = require("../models/define")
exports.others = (req, res) ->
	
	#res.render('others/others' + req.params.id + req.params.format, {
	res.render "others/others" + req.params.id + ".jade",
		#title: config.title
		#instructor: config.instructor
		title: define.title
		instructor: define.instructor
		pretty: true

