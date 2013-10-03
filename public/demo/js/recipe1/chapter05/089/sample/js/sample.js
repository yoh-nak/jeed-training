window.addEventListener("load", function(){
	// 置換1ボタンにイベントを割り当て
	document.getElementById("repBtn1").addEventListener("click", function(){
		// 置換対象文字列を読み出し
		var text = document.getElementById("srcText").value;
		// 正規表現で置換
		var text = text.replace(/円/g, "万円");
		// 結果を表示
		document.getElementsByTagName("output")[0].innerHTML = text;
	}, false);
	// 置換2ボタンにイベントを割り当て
	document.getElementById("repBtn2").addEventListener("click", function(){
		// 置換対象文字列を読み出し
		var text = document.getElementById("srcText").value;
		// 正規表現で置換
		var text = text.replace(/\d{1,3}円/g, function(str, ptr, allStr){
			return parseInt(str) + 75 + "円";
		});
		// 結果を表示
		document.getElementsByTagName("output")[0].innerHTML = text;
	}, false);
}, false);