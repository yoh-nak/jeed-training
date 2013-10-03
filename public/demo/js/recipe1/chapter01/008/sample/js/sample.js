window.addEventListener("load", function(){
	// 文字入れる変数を用意
	var total = "";
	// 10回繰り返す
	for(var i=0; i<10; i++){
		total = total + (new String(i)) + ", ";
	}
	// 結果を出力
	document.getElementsByTagName("output")[0].innerHTML = total;
	// 文字入れる変数を初期化
	total = "";
	// 10回繰り返す
	for(var i=10; i>0; i--){
		total = total + (new String(i)) + ", ";
	}
	// 結果を出力
	document.getElementsByTagName("output")[1].innerHTML = total;
}, false);