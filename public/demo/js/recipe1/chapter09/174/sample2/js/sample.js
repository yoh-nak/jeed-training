window.onload = function(){
	var ele = document.getElementsByTagName("div")[0];
	// body要素にイベントリスナーを設定
	document.body.onkeydown = function(){
		// 押されたキーコードを求める
		var kc = event.keyCode;
		// キーコードから文字に変換
		var str = String.fromCharCode(kc);
		// 結果を出力
		ele.innerHTML = str+"(キーコード："+kc+")";
		// 特殊キーの押下状態をチェック
		var altKey = event.altKey;
		var altKeyLeft = event.altLeft;
		var altKeyGraph = event.altGraphKey;
		var ctrlKey = event.altKey;
		var ctrlKeyLeft = event.ctrlLeft;
		var shiftKey = event.shiftKey;
		var shiftKeyLeft = event.shiftLeft;
		var metaKey = event.metaKey;
		// 結果を出力
		ele.innerHTML += "<br>ALTキー："+altKey;
		ele.innerHTML += "<br>左ALTキー："+altKeyLeft;
		ele.innerHTML += "<br>ALTキー(2)："+altKeyGraph;
		ele.innerHTML += "<br>ctrlキー："+ctrlKey;
		ele.innerHTML += "<br>左ctrlキー："+ctrlKeyLeft;
		ele.innerHTML += "<br>Shiftキー："+shiftKey;
		ele.innerHTML += "<br>左Shiftキー："+shiftKeyLeft;
		ele.innerHTML += "<br>メタ(特殊)キー："+metaKey;
	}
}
