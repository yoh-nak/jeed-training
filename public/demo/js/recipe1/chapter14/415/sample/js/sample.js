window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// img要素を読み出し
		var img = document.getElementsByTagName("img")[0];
		// テキストフィールドに入力されている値を読み出し
		var val = document.getElementById("filterValue").value;
		// コントラストフィルタを設定
		img.style.webkitFilter = "contrast("+val+")";
	}, false);
}, false);
