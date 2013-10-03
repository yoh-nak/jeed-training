window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// ダイアログで数値を入力
	var num = prompt("0〜9までの数値を入れて下さい", 1) | 0;
	// 0かどうか調べる
	if (num === 0){
		ele[0].innerHTML = "入力された値はゼロです";
	}else{
		ele[0].innerHTML = "入力された値はゼロ以外です";
	}
	// 入力された数値に応じて処理を分ける
	switch(num){
		case 0 : ele[1].innerHTML = "入力値は0です"; break;
		case 1 : ele[1].innerHTML = "入力値は1です"; break;
		case 2 : ele[1].innerHTML = "入力値は2です"; break;
		case 3 : ele[1].innerHTML = "入力値は3です"; break;
		default : ele[1].innerHTML = "入力値は0〜3以外です";
	}
	// 三項演算子を使って処理を分ける
	ele[2].innerHTML = (num === 0) ? "入力値は0です。" : "入力値は0以外です。"
}, false);