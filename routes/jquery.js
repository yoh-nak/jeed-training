// Generated by CoffeeScript 1.6.3
(function() {
  var define;

  define = require("../models/define");

  exports.jquery = function(req, res) {
    return res.render("jquery/jquery" + req.params.id + ".jade", {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

}).call(this);
