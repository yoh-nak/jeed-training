window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	var div = document.getElementsByTagName("div");
	// ドロップエリアを読み出し
	var dropArea = document.getElementById("dropbox");
	// ドラッグするdiv要素の数だけイベントを設定
	for(var i=0; i<2; i++){
		// div要素をドラッグ可能にする
		div[i].draggable = true;
		// ドラッグ開始時の処理を設定
		div[i].addEventListener("dragstart", function(event){
			// ドロップ先に渡すデータを設定。divの内容を渡す。
			event.dataTransfer.setData("text/plain", this.innerHTML);
		}, true);
	}
	// ドロップ領域に入った場合の処理
	dropArea.addEventListener("dragover", function(event){
		// デフォルトのイベント動作を禁止する
		event.preventDefault();
	}, true);
	// ドロップ領域から離れた場合の処理
	dropArea.addEventListener("dragleave", function(event){
		// デフォルトのイベント動作を禁止する
		event.preventDefault();
	}, true);
	// ドロップした場合の処理
	dropArea.addEventListener("drop", function(event){
		// デフォルトのイベント動作を禁止する
		event.preventDefault();
		// 渡されたデータを読み出す
		var text = event.dataTransfer.getData("text/plain");
		ele.innerHTML = "ドロップ完了。渡されたデータ："+text;
	}, true);
}, false);
