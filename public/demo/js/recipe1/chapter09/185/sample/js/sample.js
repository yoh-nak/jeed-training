window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	var dragEle = document.getElementsByTagName("div");
	// ドラッグ関連イベントを割り当て
	for(var i=0; i<dragEle.length; i++){
		// ドラッグ開始イベントを設定
		dragEle[i].addEventListener("dragstart", function(evt){
			var id = evt.target.id;
			ele[0].innerHTML = "ID名："+id+"をドラッグ開始";
		}, false);
		// ドラッグ中イベントを設定
		dragEle[i].addEventListener("drag", function(evt){
			var id = evt.target.id;
			var time = (new Date()).getTime();
			ele[1].innerHTML = "ID名："+id+"をドラッグ中";
		}, false);
		// ドラッグ開始イベントを設定
		dragEle[i].addEventListener("dragend", function(evt){
			var id = evt.target.id;
			ele[0].innerHTML = "ドラッグ終了";
			ele[1].innerHTML = "";
		}, false);
	}
}, false);
