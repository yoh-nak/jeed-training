window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// トランジション（切り替え）を行うdiv要素を取得
		var animeBox = document.getElementById("box");
		// トランジションを設定
		var cssText = "height 0.25s linear";
		animeBox.style.transition = cssText;
		animeBox.style.webkitTransition = cssText;
		animeBox.style.MozTransition = cssText;
	}, false);
}, false);
