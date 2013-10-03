window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ボタン要素の読み出し
	var btn = document.getElementById("check");
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		// 選択されたカラーコードを取得
		var color = document.getElementById("myColor").value;
		// 結果を出力
		ele.innerHTML = "カラーコード："+color;
	}, false);
}, false);