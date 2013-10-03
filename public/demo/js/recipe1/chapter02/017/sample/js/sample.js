window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数に小数値を文字列として代入
	var data1 = "1969.215";
	// 変数に数値を代入
	var data2 = 2035.92;
	// 変数に文字列を変換
	var data3 = "JavaScript";
	// data1が数値以外かどうか調べる
	var flag1 = isNaN(data1);
	// data2が数値以外かどうか調べる
	var flag2 = isNaN(data2);
	// data3が数値以外かどうか調べる
	var flag3 = isNaN(data3);
	// windowオブジェクトが数値以外かどうか調べる
	var flag4 = isNaN(window);
	// 未定義のプロパティを調べる
	var flag5 = isNaN(window.evol);
	// 結果を出力
	ele.innerHTML = flag1+"<br>"+flag2+"<br>"+flag3+"<br>"+flag4+"<br>"+flag5;
}, false);