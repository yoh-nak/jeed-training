window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ボタンにイベントを設定
	document.getElementById("readBtn").addEventListener("click", function(){
		var fileList = document.getElementById("selFile").files;
		// FileReaderオブジェクトを作成
		var reader = new FileReader();
		// テキストが読み込まれた場合の処理を設定
		reader.onload = function(evt){
			ele.innerHTML = evt.target.result;
		}
		// テキストファイルの読み込みを開始
		reader.readAsText(fileList[0]);
	}, false);
}, false);