window.addEventListener("load", function(){
	setInterval(function(){
	// 現在の日付情報を取得（生成）
	var dateObj = new Date();
	var h = ("0"+dateObj.getHours()).slice(-2);
	var m = ("0"+dateObj.getMinutes()).slice(-2);
	var s = ("0"+dateObj.getSeconds()).slice(-2);
	// SVGテキスト要素を取得
	var svgText = document.getElementById("clock");
	// 文字を変更
	svgText.textContent = h+":"+m+":"+s;
	}, 1000);
}, false);
