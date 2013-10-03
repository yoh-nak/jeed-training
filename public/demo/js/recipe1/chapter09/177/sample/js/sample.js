window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// body要素のイベントをキャプチャー
	document.body.addEventListener("mousewheel", function(evt){
		// 回転量を求める
		var delta = evt.wheelDelta;
		var deltaX = evt.wheelDeltaX;
		var deltaY = evt.wheelDeltaY;
		// 結果を出力
		ele.innerHTML = "ホイール量 : "+delta+"<br>";
		ele.innerHTML += "ホイール量X : "+deltaX+"<br>";
		ele.innerHTML += "ホイール量Y : "+deltaY;
	}, false);
	document.body.addEventListener("DOMMouseScroll", function(evt){
		// 回転量を求める
		var detail = evt.detail;
		var axis = evt.axis;
		// 結果を出力
		ele.innerHTML = "ホイール量 : "+detail+"<br>";
		ele.innerHTML += "方向 : "+axis;
	}, false);
}, false);
