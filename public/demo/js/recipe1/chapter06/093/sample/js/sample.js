window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var currentDate = new Date();
	// 協定世界時の西暦年4桁を読み出し
	var y = currentDate.getUTCFullYear();
	// 協定世界時の月を読み出し
	var m = currentDate.getUTCMonth() + 1;
	// 協定世界時の日にちを読み出し
	var d = currentDate.getUTCDate();
	// 協定世界時の曜日(0〜6)を読み出し
	var n = currentDate.getUTCDay();
	var day = "日月火水木金土".charAt(n);
	// 結果を出力
	ele.innerHTML = y+"年"+m+"月"+d+"日("+day+")";
}, false);