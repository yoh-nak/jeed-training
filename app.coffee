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
material = require("./routes/material")
diary = require("./routes/diary")
http = require("http")
fs = require("fs")
coffee = require("coffee-script")
path = require("path")
app = express()

#ミドルウェア
app.use express.basicAuth("nakano", "nakano") #ベーシック認証
app.set "port", process.env.PORT or 3000
app.set "views", __dirname + "/views"
app.set "view engine", "ejs"
app.use express.favicon()
app.use express.logger("dev")
app.use express.bodyParser()
app.use express.methodOverride()
app.use express.cookieParser("your secret here")
app.use express.session()
app.use app.router
app.use express.static(path.join(__dirname, "public")) #静的ページパス

#Stylus動的コンパイル
app.use require("stylus").middleware(
	src: __dirname + "/views"
	dest: __dirname + "/public"
)

#CoffeeScript動的コンパイル
app.use require("connect-coffee-script")(
	src: __dirname + "/views"
	dest: __dirname + "/public"
	bare: true
)

#developmentモードのみ
app.use express.errorHandler()	if "development" is app.get("env")

#ルーティングGET送信
app.get "/", routes.index
app.get "/html/:id", html.html #HTML
app.get "/_css/:id", css.css #CSS
app.get "/rwd/:id", rwd.rwd #レスポンシブWEBデザイン
app.get "/jquery/:id", jquery.jquery #jQuery
app.get "/jqm/:id", jqm.jqm #jQuery Mobile
app.get "/mobile/:id", mobile.mobile
#app.get "/nodejs:id:format", nodejs.nodejs
app.get "/nodejs/:id", nodejs.nodejs
app.get "/others/:id", others.others
app.get "/diary/:id", diary.diary #日誌
app.get "/js-:id", js.js #JavaScript基礎
app.get "/webapi-:id", js.webapi #WebAPI
app.get "/html5api-:id", js.html5
app.get "/canvas:id:format", js.canvas
app.get "/enchant-:id", js.enchant
app.get "/library:id:format", js.library
app.get "/jsrecipe-:id", js.recipe
app.get "/material-:id", material.material
app.get "/cordova:id:format", material.cordova
app.get "/material/git-:id", material.git
app.get "/material/vagrant-:id", material.vagrant

#ルーティングPOST送信
app.post "/xml-:id", js.webapiXML

#サーバー起動
http.createServer(app).listen app.get("port"), ->
	console.log "Express server listening on port " + app.get("port")

