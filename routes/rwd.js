// Generated by CoffeeScript 1.6.3
(function() {
  var define;

  define = require("../models/define");

  exports.rwd = function(req, res) {
    return res.render("rwd/rwd" + req.params.id + ".jade", {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

}).call(this);
