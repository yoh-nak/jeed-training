// Generated by CoffeeScript 1.7.1
(function() {
  var define;

  define = require("../libs/define");

  exports.jqm = function(req, res) {
    return res.render("jqm/jqm" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

}).call(this);
