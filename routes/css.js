// Generated by CoffeeScript 1.7.1
(function() {
  var define;

  define = require("../libs/define");


  /*
  require("jade").filters.code = (block) ->
  	block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"
   */

  exports.css = function(req, res) {
    return res.render("css/css" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

}).call(this);
