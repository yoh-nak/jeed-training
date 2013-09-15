var config = require('../config.json');

//資料トップ
exports.material = function(req, res){
	res.render('material/material-' + req.params.id, {
	  	title: config.title,
	  	instructor: config.instructor
	});
};

//phonegapの設定
exports.phonegap = function(req, res){
	res.render('material/phonegap/phonegap-' + req.params.id, {
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
