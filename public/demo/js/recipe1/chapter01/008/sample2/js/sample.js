window.addEventListener("load", function(){
	// 文字を入れる変数を用意
	var total = "";
	// 10回繰り返す
	var count = 0;
	while(count <10){
		total = total + (new String(count)) + ", ";
		count++;
	}
	// 結果を出力
	document.getElementsByTagName("output")[0].innerHTML = total;
	// 文字を入れる変数を用意
	total = "";
	// 繰り返す。do...whileは条件判断が最後なので最低1回は実行される
	count = 100;
	do{
		total = total + (new String(count)) + ", ";
		count++;
	}while(count <10)
	// 結果を出力
	document.getElementsByTagName("output")[1].innerHTML = total;
}, false);