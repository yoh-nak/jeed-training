// Generated by CoffeeScript 1.6.3
(function() {
  var define;

  define = require("../libs/define");

  require("jade").filters.code = function(block) {
    return block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  exports.others = function(req, res) {
    return res.render("others/others" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

  exports.git = function(req, res) {
    return res.render("others/git/git" + req.params.id, {
      title: define.title,
      instructor: define.instructor
    });
  };

  exports.vagrant = function(req, res) {
    return res.render("others/vagrant/vagrant" + req.params.id, {
      title: define.title,
      instructor: define.instructor
    });
  };

}).call(this);
