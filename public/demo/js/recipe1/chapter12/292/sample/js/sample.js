window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ボタンにイベントを設定
	document.getElementById("readBtn").addEventListener("click", function(){
		var fileList = document.getElementById("selFile").files;
		// FileReaderオブジェクトを作成
		var reader = new FileReader();
		// バイナリファイルが読み込まれた場合の処理を設定
		reader.onload = function(evt){
			var bin = evt.target.result;
			// 最初の8バイトを表示
			for(var i=0; i<8; i++){
				ele.innerHTML += bin.charCodeAt(i).toString(16)+", ";
			}
		}
		// バイナリファイルの読み込みを開始
		reader.readAsBinaryString(fileList[0]);
	}, false);
}, false);