// Generated by CoffeeScript 1.7.0
(function() {
  var define;

  define = require("../libs/define");

  require("jade").filters.code = function(block) {
    return block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  exports.diary = function(req, res) {
    return res.render("diary/diary" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

}).call(this);
