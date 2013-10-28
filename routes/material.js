var config = require('../config.json');

//資料トップ
exports.material = function(req, res){
	res.render('material/material-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};

//cordovaの設定
exports.cordova = function(req, res){
	res.render('material/cordova/cordova' + req.params.id + req.params.format, {
	  	title: config.title,
	  	instructor: config.instructor,
	  	pretty: true
	});
};

//gitの使い方
exports.git = function(req, res){
	res.render('material/git/git-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};

//vagrantの使い方
exports.vagrant = function(req, res){
	res.render('material/vagrant/vagrant-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};
