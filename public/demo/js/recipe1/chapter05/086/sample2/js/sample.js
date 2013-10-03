window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入。Bugの文字が3ヶ所にある
	var srcString = "BagBugBangBugCRLaboBigBugCR";
	// Bugの文字をカウント
	var n = srcString.match(/Bug/g).length;
	// 結果を出力
	ele.innerHTML = "削除すべきBugの数："+n;
}, false);