window.addEventListener("load", function(){
	// ボタンにイベントを割り当て
	var clearButton =  document.getElementsByTagName("button")[0];
	clearButton.addEventListener("click", function(){
		// LocalStorage内のデータを消去
		localStorage.clear();
		// メッセージを表示
		var ele = document.getElementsByTagName("output")[0];
		ele.innerHTML = "同じオリジンの全てのデータを消去しました";
	}, false);
}, false);