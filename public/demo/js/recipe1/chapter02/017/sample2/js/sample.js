window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数に数値を文字列として代入
	var numStr = "1969215";
	// 正規表現を使って調べる
	var data = numStr.match(/\D/g);
	// 結果を出力
	if (data === null){
		ele.innerHTML = "0〜9の数値です";
	}else{
		ele.innerHTML = "0〜9の数値ではありません";
	}
}, false);