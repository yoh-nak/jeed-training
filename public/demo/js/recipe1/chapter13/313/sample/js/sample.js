window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ローカルストレージからすべてのキーを読み出し出力する
	for(var i=0; i<localStorage.length; i++){
		// キーを読み出す
		var tempKey = localStorage.key(i);
		var data = localStorage.getItem(tempKey);
		// キーと値を出力
		ele.innerHTML += tempKey+" = "+data+"<br>";
	}
}, false);