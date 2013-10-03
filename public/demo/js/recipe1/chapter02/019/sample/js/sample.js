window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数に小数値を文字列として代入
	var num1 = "1969.215";
	// 変数に単位付きの値を文字型として代入
	var num2 = "320.25px";
	// num1を整数値に変換
	var n1 = parseInt(num1);
	n1 = n1 + 1;	// 1を加算
	// num1を小数値に変換
	var n2 = parseFloat(num1);
	n2 = n2 + 1;	// 1を加算
	// num2を整数値に変換
	var n3= parseInt(num2);
	n3 = n3 + 1;
	// num2を小数値に変換
	var n4= parseFloat(num2);
	n4 = n4 + 1;
	// 結果を出力
	ele.innerHTML = n1+"<br>"+n2+"<br>"+n3+"<br>"+n4;
}, false);