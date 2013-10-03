window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 画面の横幅を取得
	var w = screen.width;
	// 画面の縦幅を取得
	var h = screen.height;
	// 画面の有効な横幅を取得
	var aw = screen.availWidth;
	// 画面の有効な縦幅を取得
	var ah = screen.availHeight;
	// 結果を出力
	ele.innerHTML = "横幅："+w+"<br>";
	ele.innerHTML += "縦幅："+h+"<br>";
	ele.innerHTML += "有効な横幅："+aw+"<br>";
	ele.innerHTML += "有効な縦幅："+ah;
}, false);