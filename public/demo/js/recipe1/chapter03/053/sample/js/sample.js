window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = ["A", "B", { "D" : 59, "E" : 63}, new Date()];
	// 配列を文字列に変換する
	var myStr = myArray.toString();
	// 配列を文字列に変換する
	var myJson = JSON.stringify(myArray);
	// 配列の内容を出力
	ele.innerHTML = "■変換結果";
	ele.innerHTML += "<br>toString："+myStr;
	ele.innerHTML += "<br>JSON："+myJson;
}, false);