window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ウィンドウの横幅を取得
	var w = window.outerWidth;
	// ウィンドウの縦幅を取得
	var h = window.outerHeight;
	// ウィンドウの有効な横幅を取得
	var iw = window.innerWidth;
	// ウィンドウの有効な縦幅を取得
	var ih = window.innerHeight;
	// 結果を出力
	ele.innerHTML = "ウィンドウ全体の横幅："+w+"<br>";
	ele.innerHTML += "ウィンドウ全体の縦幅："+h+"<br>";
	ele.innerHTML += "ウィンドウの内側の横幅："+iw+"<br>";
	ele.innerHTML += "ウィンドウの内側の縦幅："+ih;
}, false);