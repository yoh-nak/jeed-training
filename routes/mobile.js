// Generated by CoffeeScript 1.7.1
(function() {
  var define;

  define = require("../libs/define");

  require("jade").filters.code = function(block) {
    return block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  exports.mobile = function(req, res) {
    return res.render("mobile/mobile" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

}).call(this);
