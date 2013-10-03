window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// body要素のスクロールイベントを設定
	window.addEventListener("scroll", function(evt){
		var time = (new Date()).getTime();
		ele.innerHTML = "スクロール中："+time;
		// スクロール位置を読み出し
		var posY = document.documentElement.scrollTop || document.body.scrollTop;
		ele.innerHTML += "／"+posY;
		// output要素の表示位置を設定
		ele.style.position = "absolute";
		ele.style.top = posY + "px";
	}, false);
}, false);
