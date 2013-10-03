window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray1 = new Array();
	// 配列要素を10個作成
	var myArray2 = new Array(10);
	// 配列要素をあらかじめ代入して作成
	var myArray3 = new Array("C","and","R");
	// 配列要素をあらかじめ代入して作成
	var myArray3 = [10];
	// 二次元配列を作成
	var myArray4 = [[1,2],[3,4,5],[6,7,8,9]];
	// 配列の内容を出力
	ele.innerHTML = "■配列内容";
	ele.innerHTML += "<br>myArray1 = "+myArray1.toString();
	ele.innerHTML += "<br>myArray2 = "+myArray2.toString();
	ele.innerHTML += "<br>myArray3 = "+myArray3.toString();
	ele.innerHTML += "<br>myArray4 = "+myArray4.toString();
	ele.innerHTML += "<hr>■配列の長さ";
	ele.innerHTML += "<br>myArray1 = "+myArray1.length;
	ele.innerHTML += "<br>myArray2 = "+myArray2.length;
	ele.innerHTML += "<br>myArray3 = "+myArray3.length;
	ele.innerHTML += "<br>myArray4 = "+myArray4.length;
}, false);