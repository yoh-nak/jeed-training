
/*
 * GET home page.
 */

var config = require('../config.json');

exports.index = function(req, res){
  res.render('index.jade', {
  	title: config.title,
  	instructor: config.instructor,
  	pretty: true
  });
};