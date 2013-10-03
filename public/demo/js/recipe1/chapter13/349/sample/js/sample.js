window.addEventListener("load", function(){
	// 編集可能領域
	var edit = document.getElementById("editArea");
	// 編集可能ボタンにイベントを設定
	document.getElementById("startEdit").addEventListener("click", function(){
		edit.contentEditable = true;
	}, false);
	// 編集禁止ボタンにイベントを設定
	document.getElementById("endEdit").addEventListener("click", function(){
		edit.contentEditable = false;
	}, false);
}, false);
