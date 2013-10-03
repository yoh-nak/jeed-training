window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = ["system", "code", "bug"];
	// 末尾の配列要素を取り出す
	var item = myArray.pop();
	// 結果を出力
	ele.innerHTML = "item："+item+"<br>";
	ele.innerHTML += "myArray："+myArray+"<hr>";
	// 配列の末尾に要素を追加する
	var n = myArray.push("newcode", "enbug");
	// 結果を出力
	ele.innerHTML += "n："+n+"<br>";
	ele.innerHTML += "myArray："+myArray;
}, false);