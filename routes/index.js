// Generated by CoffeeScript 1.7.1
(function() {
  var define;

  define = require("../libs/define");

  require("jade").filters.code = function(block) {
    return block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  exports.index = function(req, res) {
    res.render("index", {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

}).call(this);
