// Generated by CoffeeScript 1.6.3
(function() {
  var define;

  define = require("../models/define");

  require("jade").filters.code = function(block) {
    return block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  exports.diary = function(req, res) {
    return res.render("diary/diary" + req.params.id + ".jade", {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

}).call(this);
