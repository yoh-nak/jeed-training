window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// body要素のイベントをキャプチャー
	document.body.addEventListener("MozMousePixelScroll", function(evt){
		// 移動量を求める
		var detail = evt.detail;
		var axis = evt.axis;
		// 結果を出力
		ele.innerHTML = "移動量 : "+detail+"<br>";
		ele.innerHTML += "方向 : "+axis;
	}, false);
}, false);
