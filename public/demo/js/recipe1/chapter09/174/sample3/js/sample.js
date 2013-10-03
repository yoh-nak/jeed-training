window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// body要素にイベントリスナーを設定
	document.body.addEventListener("keydown", function(evt){
		// 押されたキーコードを求める
		var kc = evt.keyCode;
		// キーコードから文字に変換
		var str = String.fromCharCode(kc);
		// 結果を出力
		ele.innerHTML = str+"(キーコード："+kc+")";
		// 特殊キーの押下状態をチェック
		var altKey = evt.altKey;
		var altKeyLeft = evt.altLeft;
		var altKeyGraph = evt.altGraphKey;
		var ctrlKey = evt.ctrlKey;
		var ctrlKeyLeft = evt.ctrlLeft;
		var shiftKey = evt.shiftKey;
		var shiftKeyLeft = evt.shiftLeft;
		var metaKey = evt.metaKey;
		// 結果を出力
		ele.innerHTML += "<br>ALTキー："+altKey;
		ele.innerHTML += "<br>左ALTキー："+altKeyLeft;
		ele.innerHTML += "<br>ALTキー(2)："+altKeyGraph;
		ele.innerHTML += "<br>ctrlキー："+ctrlKey;
		ele.innerHTML += "<br>左ctrlキー："+ctrlKeyLeft;
		ele.innerHTML += "<br>Shiftキー："+shiftKey;
		ele.innerHTML += "<br>左Shiftキー："+shiftKeyLeft;
		ele.innerHTML += "<br>メタ(特殊)キー："+metaKey;
	}, false);
}, false);
