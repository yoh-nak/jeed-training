window.addEventListener("load", function(){
	var btn = document.getElementById("resetBtn");
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		// 削除するか確認する
		var flag = confirm("本当に入力内容を初期化しますか?");
		if (flag){
			// ダイアログで「OK」がクリックされたのでリセットを実行
			this.form.reset();
		}
	}, false);
}, false);