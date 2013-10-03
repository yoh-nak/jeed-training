window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ボタンにイベントを設定
	document.getElementById("readBtn").addEventListener("click", function(){
		var fileList = document.getElementById("selFile").files;
		// FileReaderオブジェクトを作成
		var reader = new FileReader();
		// ファイルが読み込まれた場合の処理を設定
		reader.onload = function(evt){
			var data = evt.target.result;
			// img要素のsrcに代入し表示
			document.getElementsByTagName("img")[0].src = data;
		}
		// 読み込み状況を表示
		reader.onprogress = function(evt){
			// img要素のsrcに代入し表示
			ele.innerHTML = evt.loaded + "バイト読み込みました";
		}
		// ファイルの読み込みを開始
		reader.readAsDataURL(fileList[0]);
	}, false);
}, false);