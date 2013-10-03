window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = [1, 2, 4, 8, "ABC", "XYZ", function(){}];
	// 配列を順番に処理
	myArray.forEach(function(element, index, targetArray){
		// 読み出した要素の順番と内容を表示
		ele.innerHTML += index+" = "+element+"<br>";
	});
}, false);