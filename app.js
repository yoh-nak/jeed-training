//モジュール
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , html = require('./routes/html')
  , css = require('./routes/css')
  , rwd = require('./routes/rwd')
  , js = require('./routes/js')
  , jquery = require('./routes/jquery')
  , mobile = require('./routes/mobile')
  , linux = require('./routes/linux')
  , jqm = require('./routes/jqm')
  , nodejs = require('./routes/nodejs')
  , material = require('./routes/material')
  , diary = require('./routes/diary')
  , http = require('http')
  , fs = require('fs')
  , coffee = require('coffee-script')
  , path = require('path');

var app = express();

//ミドルウェア
app.use(express.basicAuth('nakano', 'nakano'));　// ベーシック認証
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');　//テンプレート設定
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'))); //静的ページパス

//Stylus動的コンパイル
app.use(require('stylus').middleware({
    src: __dirname + '/views',
    dest: __dirname + '/public'
}));

//CoffeeScript動的コンパイル
app.use(require('connect-coffee-script')({
  src: __dirname + '/views',
  dest: __dirname + '/public',
  bare: true
}));


//developmentモードのみ
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//ルーティングGET送信

//単独
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/htmltag:id:format', html.html);
app.get('/css:id:format', css.css);
app.get('/rwd-id', rwd.rwd);
app.get('/jquery:id', jquery.jquery);
app.get('/jqm:id', jqm.jqm);
app.get('/mobile:id', mobile.mobile);
app.get('/nodejs:id:format', nodejs.nodejs);
app.get('/linux-:id', linux.linux);
//app.get('/diary-:id', diary.diary);
app.get('/diary:id:format', diary.diary);

//JavaScript系
app.get('/js-:id', js.js);
app.get('/webapi-:id', js.webapi);
app.get('/html5api-:id', js.html5);
app.get('/canvas:id:format', js.canvas);
app.get('/enchant-:id', js.enchant);
app.get('/library:id:format', js.library);
app.get('/jsrecipe-:id', js.recipe);

//資料系
app.get('/material-:id', material.material);
app.get('/cordova:id:format', material.cordova);
app.get('/material/git-:id', material.git);
app.get('/material/vagrant-:id', material.vagrant);

//ルーティングPOST送信
app.post('/xml-:id', js.webapiXML);


//サーバー起動
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

