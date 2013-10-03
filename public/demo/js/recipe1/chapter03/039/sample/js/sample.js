window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray1 = ["A", "B", "C"];
	var myArray2 = ["D", "E", "F", "G"];
	var myArray3 = ["H", "I"];
	// 配列同士を連結
	var myArray4 = myArray1.concat(myArray2, myArray3);
	// 配列要素をあらかじめ代入して作成
	var myStr = myArray4.join("/");
	// 配列の内容を出力
	ele.innerHTML = "■配列内容";
	ele.innerHTML += "<br>myArray1 = "+myArray1.toString();
	ele.innerHTML += "<br>myArray2 = "+myArray2.toString();
	ele.innerHTML += "<br>myArray3 = "+myArray3.toString();
	ele.innerHTML += "<br>myArray4 = "+myArray4.toString();
	ele.innerHTML += "<br>myStr = "+myStr;
}, false);