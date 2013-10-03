window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// img要素を読み出し
		var img = document.getElementsByTagName("img")[0];
		// テキストフィールドに入力されている値を読み出し
		var val = document.getElementById("filterValue").value;
		// トーン（色相変換）フィルタを設定
		img.style.webkitFilter = "hue-rotate("+val+"deg)";
	}, false);
}, false);
