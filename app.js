// Generated by CoffeeScript 1.7.1
(function() {
  var RedisStore, app, coffee, compile, css, database, diary, express, fs, html, http, jqm, jquery, js, material, mobile, nib, nodejs, others, path, routes, rwd, stylus;

  express = require("express");

  routes = require("./routes");

  html = require("./routes/html");

  css = require("./routes/css");

  rwd = require("./routes/rwd");

  js = require("./routes/js");

  jquery = require("./routes/jquery");

  mobile = require("./routes/mobile");

  others = require("./routes/others");

  jqm = require("./routes/jqm");

  nodejs = require("./routes/nodejs");

  database = require("./routes/database");

  material = require("./routes/material");

  diary = require("./routes/diary");

  http = require("http");

  fs = require("fs");

  stylus = require("stylus");

  nib = require("nib");

  coffee = require("coffee-script");

  path = require("path");

  app = express();

  require("jade").filters.code = function(block) {
    return block.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&lt;mark&gt;/g, "<mark>").replace(/&lt;\/mark&gt;/g, "</mark>").replace(/\\&lt;mark\\&gt;/g, "&lt;mark&gt;").replace(/\\&lt;\/mark\\&gt;/g, "&lt;/mark&gt;").replace(/"/g, "&quot;");
  };

  app.use(express.basicAuth("nakano", "nakano"));

  app.set("port", process.env.PORT || 3000);

  app.set("views", __dirname + "/views");

  app.set("view engine", "jade");

  app.use(express.favicon());

  app.use(express.logger("dev"));

  app.use(express.bodyParser());

  app.use(express.methodOverride());

  app.use(express.cookieParser("your secret here"));

  app.use(express.session());

  RedisStore = require('connect-redis')(express);

  app.use(express.session({
    secret: 'himitsu',
    store: new RedisStore
  }));

  app.use(app.router);

  compile = function(str, path) {
    return stylus(str).set("filename", path).set("compress", true).use(nib());
  };

  app.use(stylus.middleware({
    src: __dirname + "/public",
    compile: compile
  }));

  app.use(express["static"](path.join(__dirname, "public")));


  /*
  app.use (err, req, res, next) ->
      res.status 403
      res.send "403"
      next err
      return
  
  app.use (err, req, res, next) ->
      res.status 404
      res.send "404"
      next err
      return
  
  app.use (req, res, next) ->
      res.status 500
      res.send "500"
      return
   */


  /*
  app.use require("stylus").middleware(
      src: __dirname + "/views"
      dest: __dirname + "/public"
  )
   */


  /*
  app.use require("connect-coffee-script")(
      src: __dirname + "/views"
      dest: __dirname + "/public"
      bare: true
  )
   */

  if ("development" === app.get("env")) {
    app.use(express.errorHandler());
  }

  app.get("/", routes.index);

  app.get("/html/:id", html.html);

  app.get("/_css/:id", css.css);

  app.get("/rwd/:id", rwd.rwd);

  app.get("/bootstrap/:id", rwd.bootstrap);

  app.get("/jquery/:id", jquery.jquery);

  app.get("/jqueryui/:id", jquery.jqueryui);

  app.get("/jqm/:id", jqm.jqm);

  app.get("/mobile/:id", mobile.mobile);

  app.get("/nodejs/:id", nodejs.nodejs);

  app.get("/mysql/:id", database.mysql);

  app.get("/postgres/:id", database.postgres);

  app.get("/mongodb/:id", database.mongodb);

  app.get("/redis/:id", database.redis);

  app.get("/angular/:id", js.angular);

  app.get("/requirejs/:id", js.requirejs);

  app.get("/underscore/:id", js.underscore);

  app.get("/jasmine/:id", js.jasmine);

  app.get("/jsdoc/:id", js.jsdoc);

  app.get("/json2js/:id", js.json2js);

  app.get("/others/:id", others.others);

  app.get("/git/:id", others.git);

  app.get("/linux/:id", others.linux);

  app.get("/vagrant/:id", others.vagrant);

  app.get("/genymotion/:id", others.genymotion);

  app.get("/diary/:id", diary.diary);

  app.get("/js-:id:format", js.js);

  app.get("/jsv2/:id", js.jsv2);

  app.get("/webapi-:id:format", js.webapi);

  app.get("/html5api-:id:format", js.html5);

  app.get("/canvas/:id", js.canvas);

  app.get("/enchant/:id", js.enchant);

  app.get("/library/:id", js.library);

  app.get("/framework/:id", js.framework);

  app.get("/jsrecipe-:id", js.recipe);

  app.get("/material:id:format", material.material);

  app.get("/cordova/:id", js.cordova);

  app.post("/xml-:id", js.webapiXML);

  http.createServer(app).listen(app.get("port"), function() {
    return console.log("Express server listening on port " + app.get("port"));
  });

}).call(this);
