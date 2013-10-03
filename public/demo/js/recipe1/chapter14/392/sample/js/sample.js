window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.body;
		// 背景画像の固定方法を設定
		divElement.style.backgroundAttachment = "fixed";
	}, false);
}, false);
