window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	var div = document.getElementsByTagName("div")[0];
	var dropArea = document.getElementsByTagName("div")[1];
	// Google Chrome, Safari, IE10の場合
	div.draggable = true;
	// Firefoxの場合は以下が必要
	div.addEventListener("dragstart", function(event){
		event.dataTransfer.setData("text/plain", "dragItem");
	}, true);
	// ドロップ領域に入った場合の処理
	dropArea.addEventListener("dragover", function(event){
		// 背景色を変える
		this.style.backgroundColor = "orange";
		// デフォルトのイベント動作を禁止する
		event.preventDefault();
		ele.innerHTML = "ドラッグ要素はドロップ領域内です";
	}, true);
	// ドロップ領域から離れた場合の処理
	dropArea.addEventListener("dragleave", function(event){
		// 背景色を変える
		this.style.backgroundColor = "#ffd";
		// デフォルトのイベント動作を禁止する
		event.preventDefault();
		ele.innerHTML = "ドロップ領域から離れました";
	}, true);
	// ドロップした場合の処理
	dropArea.addEventListener("drop", function(event){
		// デフォルトのイベント動作を禁止する
		event.preventDefault();
		ele.innerHTML = "ドロップしました。"+(new Date());
	}, true);
}, false);
