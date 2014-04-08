#モジュール
express = require('express')
routes = require('./routes')
html = require('./routes/html')
css = require('./routes/css')
rwd = require('./routes/rwd')
js = require('./routes/js')
jquery = require('./routes/jquery')
mobile = require('./routes/mobile')
others = require('./routes/others')
jqm = require('./routes/jqm')
nodejs = require('./routes/nodejs')
database = require('./routes/database')
diary = require('./routes/diary')
http = require('http')
fs = require('fs')
stylus = require('stylus')
nib = require('nib')
coffee = require('coffee-script')
path = require('path')
app = express()

require('jade').filters.code = (block) ->
    block
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/#/g, '&#35;')
        .replace(/&lt;mark&gt;/g, '<mark>')
        .replace(/&lt;\/mark&gt;/g, '</mark>')
        .replace(/\\&lt;mark\\&gt;/g, '&lt;mark&gt;')
        .replace(/\\&lt;\/mark\\&gt;/g, '&lt;/mark&gt;')
        .replace /'/g, '&#39;'


#ミドルウェア
#app.use express.basicAuth('nakano', 'nakano') #ベーシック認証
auth = express.basicAuth('nakano', 'nakano');

app.set 'port', process.env.PORT or 3000
app.set 'views', __dirname + '/views'
app.set 'view engine', 'jade'
app.use express.favicon()
app.use express.logger('dev')
app.use express.bodyParser()
app.use express.methodOverride()
app.use express.cookieParser('your secret here')
app.use express.session()
app.use app.router
compile = (str, path) ->
    stylus(str).set('filename', path).set('compress', true).use nib()
app.use stylus.middleware(
    src: __dirname + '/public'
    compile: compile
)
app.use express.static(path.join(__dirname, 'public'))

###
app.use (err, req, res, next) ->
    res.status 403
    res.send '403'
    next err
    return

app.use (err, req, res, next) ->
    res.status 404
    res.send '404'
    next err
    return

app.use (req, res, next) ->
    res.status 500
    res.send '500'
    return
###

#CoffeeScript動的コンパイル
###
app.use require('connect-coffee-script')(
    src: __dirname + '/views'
    dest: __dirname + '/public'
    bare: true
)
###

#developmentモードのみ
app.use express.errorHandler()    if 'development' is app.get('env')

#ルーティングGET送信
app.get '/', auth, routes.index
app.get '/html/:id', auth, html.html # HTML
app.get '/_css/:id', auth, css.css # CSS
app.get '/rwd/:id', auth, rwd.rwd # レスポンシブWEBデザイン
app.get '/bootstrap/:id', auth, rwd.bootstrap # Bootstrap
app.get '/jquery/:id', auth, jquery.jquery # jQuery
app.get '/jqueryui/:id', auth, jquery.jqueryui # jQuery UI
app.get '/jqm/:id', auth, jqm.jqm # jQuery Mobile
app.get '/mobile/:id', auth, mobile.mobile # スマホサイト
app.get '/nodejs/:id', auth, nodejs.nodejs # Node.js
app.get '/mysql/:id', auth, database.mysql # MySQL
app.get '/postgres/:id', auth, database.postgres # PostgreSQL
app.get '/mongodb/:id', auth, database.mongodb # MongoDB
app.get '/redis/:id', auth, database.redis # Redis
app.get '/angular/:id', auth, js.angular # AngularJS
app.get '/requirejs/:id', auth, js.requirejs # RequireJS
app.get '/underscore/:id', auth, js.underscore # Underscore.js
app.get '/jasmine/:id', auth, js.jasmine # Jasmine
app.get '/jsdoc/:id', auth, js.jsdoc # JSDoc
app.get '/json2js/:id', auth, js.json2js # json2.js
app.get '/others/:id', auth, others.others
app.get '/git/:id', auth, others.git # Git/GitHub
app.get '/linux/:id', auth, others.linux # Linux
app.get '/vagrant/:id', auth, others.vagrant # Vagrant
app.get '/chef/:id', auth, others.chef # chef
app.get '/genymotion/:id', auth, others.genymotion # GENYMOTION
app.get '/diary/:id', auth, diary.diary # 日誌
app.get '/jsv2/:id', auth, js.jsv2 # JavaScript
app.get '/webapi/:id', auth, js.webapi # WebAPI
app.get '/html5/:id', auth, js.html5 # HTML5 API
app.get '/canvas/:id', auth, js.canvas # Canvas
app.get '/enchant/:id', auth, js.enchant # enchant.js
app.get '/library/:id', auth, js.library # ライブラリ
app.get '/framework/:id', auth, js.framework # フレームワーク
app.get '/recipe/:id', auth, js.recipe
app.get '/cordova/:id', auth, js.cordova

#ルーティングPOST送信
fAjaxPost = (req, res, mimetype) ->
    body = ''
    filePath = __dirname + '/public/' + req.originalUrl
    data = fs.readFileSync(filePath).toString()
    res.contentType mimetype
    res.send data
    return
    
app.post '/demo/webapi/exercise1/sample.txt', auth, (req, res) ->
    fAjaxPost(req, res, 'text/plain')
    return
app.post '/demo/webapi/exercise2/sample.html', auth, (req, res) ->
    fAjaxPost(req, res, 'text/plain')
    return
app.post '/demo/webapi/exercise4/sample.xml', auth, (req, res) ->
    fAjaxPost(req, res, 'text/xml')
    return
app.post '/demo/webapi/exercise5/sample.xml', auth, (req, res) ->
    fAjaxPost(req, res, 'text/xml')
    return
app.post '/demo/webapi/exercise6/sample.json', auth, (req, res) ->
    fAjaxPost(req, res, 'application/json')
    return

#サーバー起動
http.createServer(app).listen app.get('port'), ->
    console.log 'Express server listening on port ' + app.get('port')
