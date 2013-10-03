window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("getBtn").addEventListener("click", function(){
		var ele = document.getElementsByTagName("output")[0];
		// h1(見出し)要素を読み出し
		var h1Ele = document.getElementsByTagName("h1")[0];
		// h1の文字色を読み出して表示
		var data = document.defaultView.getComputedStyle(h1Ele, "");
		// 各プロパティを読み出し
		ele.innerHTML = "left : "+data.getPropertyValue("left");
		ele.innerHTML += "<br>top : "+data.getPropertyValue("top");
		ele.innerHTML += "<br>width : "+data.getPropertyValue("width");
		ele.innerHTML += "<br>height : "+data.getPropertyValue("height");
		ele.innerHTML += "<br>color : "+data.getPropertyValue("color");
		ele.innerHTML += "<br>background-color : "+data.getPropertyValue("background-color");
	}, false);
}, false);
