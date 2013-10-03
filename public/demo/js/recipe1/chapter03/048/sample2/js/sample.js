window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = [ ];
	// 要素を任意の場所に追加
	myArray[14] = "Up";
	myArray[30] = "Down";
	myArray["Quark"] = "RGB Color";
	// 配列の内容を出力
	ele.innerHTML = "■配列内容<br>"+myArray.toString()+"<br>";
	// for...inで出力
	for(var i in myArray){ ele.innerHTML += myArray[i] + "<br>"; }
}, false);