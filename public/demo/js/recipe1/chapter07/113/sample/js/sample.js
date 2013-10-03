window.addEventListener("load", function(){
	var btn1 = document.getElementById("to400");
	var btn2 = document.getElementById("by10");
	// ボタンにイベントを割り当て
	btn1.addEventListener("click", function(){
		// 指定した位置(400px先)までスクロールする
		window.scrollTo(0, 400);
	}, false);
	// ボタンにイベントを割り当て
	btn2.addEventListener("click", function(){
		// 指定した量(10px)だけスクロールする
		window.scrollBy(0, 10);
	}, false);
}, false);
