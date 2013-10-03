window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("setBtn").addEventListener("click", function(){
		// h1(見出し)要素を読み出し
		var h1Ele = document.getElementsByTagName("h1")[0];
		// ランダムな色を算出
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var RGBcolor = "rgb("+r+","+g+","+b+")";
		// h1の文字色のプロパティを設定
		h1Ele.style.color = RGBcolor;
	}, false);
	// ボタンにイベントを設定
	document.getElementById("getBtn").addEventListener("click", function(){
		var ele = document.getElementsByTagName("output")[0];
		// h1(見出し)要素を読み出し
		var h1Ele = document.getElementsByTagName("h1")[0];
		// h1の文字色を読み出して表示
		ele.innerHTML = h1Ele.style.color;
	}, false);
}, false);
