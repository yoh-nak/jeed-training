window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ボタンにイベントを設定
	document.getElementById("checkBtn").addEventListener("click", function(){
		var fileList = document.getElementById("selFile").files;
		// 選択されたファイル数
		var total = fileList.length;
		ele.innerHTML = "選択されたファイル数："+total+"<br>";
		// 選択されたファイル数だけ繰り返し情報を表示
		for(var i=0; i<total; i++){
			// ファイル名を読み出し
			ele.innerHTML += "ファイル名："+fileList[i].name+"<br>";
			// ファイルサイズを読み出し
			ele.innerHTML += "サイズ："+fileList[i].size+"バイト<br>";
			// 種類を読み出し
			ele.innerHTML += "種類："+fileList[i].type+"<hr>";
		}
	}, false);
}, false);