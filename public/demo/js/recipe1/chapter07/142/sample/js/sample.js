window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// セレクトメニューの要素を読み出し
	var mySelMenu = document.getElementById("food");
	// ボタン要素の読み出し
	var btn = document.getElementById("chk");
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		// セレクトメニューの選択番号を取得
		var no = mySelMenu.selectedIndex;
		// セレクトメニューの選択項目を取得
		var item = mySelMenu.value;
		// セレクトメニューの選択項目の文字を取得
		var text = mySelMenu.options[no].text;
		// 結果を出力
		ele.innerHTML = "選択された番号："+no+"<br>";
		ele.innerHTML += "選択された項目："+item+"<br>";
		ele.innerHTML += "選択された項目の文字："+text+"<br>";
	}, false);
}, false);