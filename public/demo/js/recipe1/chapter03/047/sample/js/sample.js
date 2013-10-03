window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = [98, 198, 498, 980];
	// 配列を順番に処理
	var ary = myArray.map(function(element, index, targetArray){
		// 読み出した要素に「円」の文字を末尾に追加
		return element+"円";
	});
	// 結果を出力
	ele.innerHTML = "■元の配列<br>"+myArray.toString()+"<br>";
	ele.innerHTML += "■処理した配列<br>"+ary.toString();
}, false);