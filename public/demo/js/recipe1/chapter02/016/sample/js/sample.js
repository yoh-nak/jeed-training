window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数に評価する文字列を代入
	var text = "Math.pow(2, 8)+(100/10)*2";
	// eval()で評価
	var result = eval(text);
	// 結果を出力
	ele.innerHTML = text+"<br>"+result;
}, false);