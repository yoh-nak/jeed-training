window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var currentDate = new Date();
	// 西暦年4桁を読み出し
	var y = currentDate.getFullYear();
	// 月を読み出し
	var m = currentDate.getMonth() + 1;
	// 日にちを読み出し
	var d = currentDate.getDate();
	// 曜日(0〜6)を読み出し
	var n = currentDate.getDay();
	var day = "日月火水木金土".charAt(n);
	// 結果を出力
	ele.innerHTML = y+"年"+m+"月"+d+"日("+day+")";
}, false);