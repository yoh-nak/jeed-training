window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = ["A", "B", "C", "D", "E", "F", "G"];
	// 配列の内容を前方にずらす
	var item = myArray.shift();
	ele.innerHTML = item + "が取り出されました<br>";
	ele.innerHTML += "配列内容は："+myArray.toString();
	// 配列の内容を後方にずらし、新たな要素を追加
	var len = myArray.unshift("X", "Y");
	ele.innerHTML += "<hr>新たな配列の長さは"+len + "<br>";
	ele.innerHTML += "配列内容は："+myArray.toString();
}, false);