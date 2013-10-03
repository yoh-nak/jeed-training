window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// タイマーを使って選択された文字を定期的に表示
	setInterval(function(){
		// 選択範囲を保持するオブジェクトを取得
		var selObj = window.getSelection();
		// 最初に選択された選択範囲から文字を取得
		var text = selObj.getRangeAt(0);
		// 選択された文字を出力
		ele.innerHTML = text;
	}, 1000);
}, false);