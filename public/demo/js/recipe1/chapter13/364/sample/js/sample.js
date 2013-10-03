window.addEventListener("load", function(){
	var div = document.getElementsByTagName("div")[0];
	// Google Chrome, Safari, IE10の場合
	div.draggable = true;
	// Firefoxの場合は以下が必要
	div.addEventListener("dragstart", function(event){
		event.dataTransfer.setData("text/plain", "dragItem");
	}, true);
}, false);
