window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 文字に取り消し線を設定
		divElement.style.textDecoration = "line-through";
	}, false);
}, false);
