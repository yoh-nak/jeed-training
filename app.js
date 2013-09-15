
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , html5 = require('./routes/html5')
  , css3 = require('./routes/css3')
  , js = require('./routes/js')
  , material = require('./routes/material')
  , http = require('http')
  , path = require('path');

var app = express();

// ベーシック認証
app.use(express.basicAuth('nakano', 'nakano'));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//ルーティング
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/html5-:id', html5.html5);
app.get('/css3-:id', css3.css3);
app.get('/js-:id', js.js);

//資料
app.get('/material-:id', material.material);
app.get('/material/phonegap-:id', material.phonegap);
app.get('/material/vagrant-:id', material.vagrant);


//サーバー起動
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

