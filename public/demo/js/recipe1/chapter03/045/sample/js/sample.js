window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray1 = new Array();
	// 配列を作成
	var myArray2 = ["a-Ray"];
	// オブジェクトを作成
	var myObject = new Object();
	// 配列かどうか調べる
	var flag1 = Array.isArray(myArray1);
	var flag2 = Array.isArray(myArray2);
	var flag3 = Array.isArray(myObject);
	var flag4 = myArray1 instanceof Array;
	var flag5 = myArray2 instanceof Array;
	var flag6 = myObject instanceof Array;
	// 結果を出力
	ele.innerHTML = "(1) myArray1 = "+flag1+"<br>";
	ele.innerHTML += "(2) myArray2 = "+flag2+"<br>";
	ele.innerHTML += "(3) myObject = "+flag3+"<hr>";
	ele.innerHTML += "(4) myArray1 = "+flag4+"<br>";
	ele.innerHTML += "(5) myArray2 = "+flag5+"<br>";
	ele.innerHTML += "(6) myObject = "+flag6+"<br>";
}, false);