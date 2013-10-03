window.onload = function(){
	// 編集可能領域
	var edit = document.getElementById("editArea");
	// 編集可能ボタンにイベントを設定
	document.getElementById("startEdit").onclick = function(){
		edit.contentEditable = true;
	}
	// 編集禁止ボタンにイベントを設定
	document.getElementById("endEdit").onclick = function(){
		edit.contentEditable = false;
	}
}
