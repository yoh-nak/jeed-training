window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入
	var myString = "JavaScript";
	// 最初の文字を取り出す
	var chr1 = myString.charAt(0);
	// 最後の文字を取り出す
	var chr2 = myString.charAt(myString.length-1);
	// 結果を出力
	ele.innerHTML = "最初の文字："+chr1+"<br>最後の文字："+chr2;
}, false);