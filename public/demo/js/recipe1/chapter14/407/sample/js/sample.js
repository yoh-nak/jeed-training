window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// アニメーションしているdiv要素を取得
		var animeBox = document.getElementById("box");
		// アニメーションの速度を変更（0.5秒にする）
		animeBox.style.WebkitAnimationDuration = "500ms";
		animeBox.style.MozAnimationDuration = "500ms";
		animeBox.style.animationDuration = "500ms";
	}, false);
}, false);
