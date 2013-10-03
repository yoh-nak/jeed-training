window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// ダイアログで数値を入力
	var num = prompt("0〜9までの数値を入れて下さい", 1) | 0;
	// 配列に表示文字を代入
	var msg = ["0です", "1です"];
	// 0かどうか調べる
	ele[0].innerHTML = msg[num] || "0と1以外です";
}, false);