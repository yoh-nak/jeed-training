window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 以前見ていたページURLを読み出す
	var url = document.referrer;
	// 結果を出力
	ele.innerHTML = url;
}, false);