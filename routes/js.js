// Generated by CoffeeScript 1.6.3
(function() {
  var define;

  define = require("../libs/define");

  require("jade").filters.code = function(block) {
    return block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  exports.js = function(req, res) {
    return res.render("js/js-" + req.params.id + req.params.format, {
      title: define.title,
      instructor: define.instructor
    });
  };

  exports.enchant = function(req, res) {
    return res.render("js/enchant/enchant" + req.params.id, {
      title: define.title,
      instructor: define.instructor
    });
  };

  exports.webapi = function(req, res) {
    return res.render("js/webapi/webapi-" + req.params.id + req.params.format, {
      title: define.title,
      instructor: define.instructor
    });
  };

  exports.webapiXML = function(req, res) {
    res.header("Content-Type", "text/xml");
    return res.render("js/webapi/xml-" + req.params.id, {});
  };

  exports.html5 = function(req, res) {
    return res.render("js/html5/html5-" + req.params.id + req.params.format, {
      title: define.title,
      instructor: define.instructor
    });
  };

  exports.canvas = function(req, res) {
    return res.render("js/canvas/canvas" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

  exports.angular = function(req, res) {
    return res.render("js/angular/angular" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

  exports.cordova = function(req, res) {
    return res.render("js/cordova/cordova" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

  exports.requirejs = function(req, res) {
    return res.render("js/require/require" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

  exports.underscore = function(req, res) {
    return res.render("js/underscore/underscore" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

  exports.jasmine = function(req, res) {
    return res.render("js/jasmine/jasmine" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

  exports.library = function(req, res) {
    return res.render("js/library/library" + req.params.id, {
      title: define.title,
      instructor: define.instructor,
      pretty: true
    });
  };

  exports.recipe = function(req, res) {
    return res.render("js/recipe/recipe1-" + req.params.id, {
      title: define.title,
      instructor: define.instructor
    });
  };

}).call(this);
