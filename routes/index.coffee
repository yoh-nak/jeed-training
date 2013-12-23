
#
# * GET home page.
# 
config = require("../config.json")
exports.index = (req, res) ->
	res.render "index.jade",
		title: config.title
		instructor: config.instructor
		pretty: true

