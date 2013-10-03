window.addEventListener("load", function(){
	// varで変数を宣言し値に1を代入
	var apple = 1;
	// var宣言した変数は変更可能なので値を加算
	apple = apple + 720;
	// 結果を出力
	document.getElementsByTagName("output")[0].innerHTML = apple;
	// constで定数として宣言
	const android = 1;
	// constで宣言した変数は変更ができないのでエラー
	android = android + 1;
	// 結果を出力
	document.getElementsByTagName("output")[1].innerHTML = android;
}, false);