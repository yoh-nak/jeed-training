window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入。Bugの文字が3ヶ所にある
	var srcString = "BagBugBangBugCRLaboBigBugCR";
	// Bugの文字を削除した後に再度連結
	var myString = srcString.split("Bug").join("");
	// 結果を出力
	ele.innerHTML = "元の文字列："+srcString+"<br>削　除　後："+myString;
}, false);