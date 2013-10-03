window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// テキストフィールドにイベントを設定
	document.getElementById("uName").addEventListener("select", function(evt){
		// 選択開始位置を取得
		var startPos = this.selectionStart;
		// 選択終了位置を取得
		var endPos = this.selectionEnd;
		// 選択範囲を出力
		ele[0].innerHTML = startPos+"〜"+endPos;
		// 選択範囲の文字を抜き出す
		var text = this.value.substring(startPos, endPos);
		// 結果を出力
		ele[1].innerHTML = text;
	}, false);
}, false);
