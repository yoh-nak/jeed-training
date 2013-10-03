window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 回線の種類を調べる
	var lineType = navigator.connection.type;
	// 結果を出力
	ele.innerHTML = lineType;
}, false);