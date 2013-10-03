window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入。末尾には全角空白が2つある
	var srcString = "   Java   Script　　";
	// 左右の空白を削除
	var myString = srcString.trim();
	// 結果を出力
	ele.innerHTML = myString+"<br>"+escape(myString);
}, false);