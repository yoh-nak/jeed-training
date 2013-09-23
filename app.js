//モジュール
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , html5 = require('./routes/html5')
  , css3 = require('./routes/css3')
  , rwd = require('./routes/rwd')
  , js = require('./routes/js')
  , jqm = require('./routes/jqm')
  , nodejs = require('./routes/nodejs')
  , material = require('./routes/material')
  , diary = require('./routes/diary')
  , http = require('http')
  , path = require('path');

var app = express();


//ミドルウェア
app.use(express.basicAuth('nakano', 'nakano'));　// ベーシック認証
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //デフォルトテンプレート
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'))); //静的ページパス

//developmentモードのみ
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//ルーティング

//単独
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/html5-:id', html5.html5);
app.get('/css3-:id', css3.css3);
app.get('/rwd-:id', rwd.rwd);
app.get('/jqm-:id', jqm.jqm);
app.get('/nodejs-:id', nodejs.nodejs);
app.get('/diary-:id', diary.diary);

//JavaScript系
app.get('/js-:id', js.js);
app.get('/enchant-:id', js.enchant);

//資料系
app.get('/material-:id', material.material);
app.get('/material/phonegap-:id', material.phonegap);
app.get('/material/git-:id', material.git);
app.get('/material/vagrant-:id', material.vagrant);


//サーバー起動
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

