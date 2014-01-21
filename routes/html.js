// Generated by CoffeeScript 1.6.3
(function() {
  var define;

  define = require("../libs/define");

  require("jade").filters.code = function(block) {
    return block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  exports.html = function(req, res) {
    return res.render("html/html" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

}).call(this);
