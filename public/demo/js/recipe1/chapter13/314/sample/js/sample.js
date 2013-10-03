window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	var input =  document.getElementsByTagName("input");
	// inputボタンにイベントを割り当て
	input[1].addEventListener("click", function(){
		// テキストフィールドのキーを読み出す
		var tempKey = input[0].value;
		// キーとデータを削除
		localStorage.removeItem(tempKey);
		// メッセージを出力
		ele.innerHTML = tempKey+"キーのデータを消去しました";
	}, false);
}, false);