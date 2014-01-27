#モジュール
express = require("express")
routes = require("./routes")
html = require("./routes/html")
css = require("./routes/css")
rwd = require("./routes/rwd")
js = require("./routes/js")
jquery = require("./routes/jquery")
mobile = require("./routes/mobile")
others = require("./routes/others")
jqm = require("./routes/jqm")
nodejs = require("./routes/nodejs")
database = require("./routes/database")
material = require("./routes/material")
diary = require("./routes/diary")
http = require("http")
fs = require("fs")
stylus = require("stylus")
nib = require("nib")
coffee = require("coffee-script")
path = require("path")
app = express()

#ミドルウェア
app.use express.basicAuth("nakano", "nakano") #ベーシック認証
app.set "port", process.env.PORT or 3000
app.set "views", __dirname + "/views"
app.set "view engine", "jade"
app.use express.favicon()
app.use express.logger("dev")
app.use express.bodyParser()
app.use express.methodOverride()
app.use express.cookieParser("your secret here")
app.use express.session()
app.use app.router
#app.use require("stylus").middleware(__dirname + "/public")
compile = (str, path) ->
	stylus(str).set("filename", path).set("compress", true).use nib()
app.use stylus.middleware(
	src: __dirname + "/public"
	compile: compile
)
app.use express.static(path.join(__dirname, "public"))

###
app.use require("stylus").middleware(
	src: __dirname + "/views"
	dest: __dirname + "/public"
)
###

#CoffeeScript動的コンパイル
###
app.use require("connect-coffee-script")(
	src: __dirname + "/views"
	dest: __dirname + "/public"
	bare: true
)
###

#developmentモードのみ
app.use express.errorHandler()	if "development" is app.get("env")

#ルーティングGET送信
app.get "/", routes.index
app.get "/html/:id", html.html # HTML
app.get "/_css/:id", css.css # CSS
app.get "/rwd/:id", rwd.rwd # レスポンシブWEBデザイン
app.get "/bootstrap/:id", rwd.bootstrap # Bootstrap
app.get "/jquery/:id", jquery.jquery # jQuery
app.get "/jqueryui/:id", jquery.jqueryui # jQuery UI
app.get "/jqm/:id", jqm.jqm # jQuery Mobile
app.get "/mobile/:id", mobile.mobile # スマホサイト
app.get "/nodejs/:id", nodejs.nodejs # Node.js
app.get "/mysql/:id", database.mysql # MySQL
app.get "/mongodb/:id", database.mongodb # MongoDB
app.get "/redis/:id", database.redis # Redis
app.get "/angular/:id", js.angular # AngularJS
app.get "/requirejs/:id", js.requirejs # RequireJS
app.get "/underscore/:id", js.underscore # Underscore.js
app.get "/jasmine/:id", js.jasmine # Jasmine
app.get "/jsdoc/:id", js.jsdoc # JSDoc
app.get "/json2js/:id", js.json2js # json2.js
app.get "/others/:id", others.others
app.get "/diary/:id", diary.diary # 日誌
app.get "/js-:id:format", js.js # JavaScript基礎
app.get "/webapi-:id:format", js.webapi # WebAPI
app.get "/html5api-:id:format", js.html5 # HTML5 API
app.get "/canvas/:id", js.canvas # Canvas
app.get "/enchant/:id", js.enchant # enchant.js
app.get "/library/:id", js.library # ライブラリ
app.get "/jsrecipe-:id", js.recipe
app.get "/material:id:format", material.material
app.get "/cordova/:id", js.cordova
app.get "/material/git-:id", material.git
app.get "/material/vagrant-:id", material.vagrant

#ルーティングPOST送信
app.post "/xml-:id", js.webapiXML

#サーバー起動
http.createServer(app).listen app.get("port"), ->
	console.log "Express server listening on port " + app.get("port")

