window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 重複している項目がある配列を作成
	var myArray = ["PC", "MZ", "FM", "PC", "PC", "MZ", "FM", "MZ", "MZ"];
	// 結果を入れる配列を作成
	var resultArray = [ ];
	// 要素の数だけ繰り返す
	for(var i=0; i<myArray.length; i++){
		resultArray[myArray[i]] = true;
	}
	// 結果を出力
	for(var i in resultArray){
		ele.innerHTML += i+"<br>";
	}
}, false);