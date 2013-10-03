window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入
	var str = "JavaScript";
	// 文字列の長さを求める
	var n = str.length;
	// 結果を出力
	ele.innerHTML = str+"の文字列の長さ："+n;
}, false);