window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// モーダルダイアログを表示
	var text = showModalDialog("./input.html", window,"dialogWidth=320px; dialogHeight=240px;");
	// 入力結果を表示
	ele.innerHTML = window.returnValue;
}, false);