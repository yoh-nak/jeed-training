window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Geolocation APIが使えるか調べる
	if (!navigator.geolocation){
		ele.innerHTML = "Geolocation APIは使えません";
		return;
	}
	// 一度だけ位置情報を取得する
	navigator.geolocation.getCurrentPosition(function(position){
		// 緯度を求める
		var lat = position.coords.latitude;
		// 経度を求める
		var lon = position.coords.longitude;
		// 緯度経度の誤差を求める
		var acc = position.coords.accuracy;
		// 高度を求める
		var alt = position.coords.altitude;
		// 高度の誤差を求める
		var accAlt = position.coords.altitudeAccuracy;
		// 結果を出力
		ele.innerHTML = "緯度："+lat+"<br>";
		ele.innerHTML += "経度："+lon+"<br>";
		ele.innerHTML += "緯度経度の誤差："+acc+"m<br>";
		ele.innerHTML += "高度："+alt+"<br>";
		ele.innerHTML += "高度の誤差："+accAlt+"<br>";
	},function(err){
		// エラーの場合。エラーコードを出力
		ele.innerHTML = "エラー："+err.code;
	},{
		// 詳細な位置を返すように設定
		enableHighAccuracy : true
	});
}, false);