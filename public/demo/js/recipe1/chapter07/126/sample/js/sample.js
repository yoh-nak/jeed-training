window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 書き込みボタンにイベントを割り当て
	document.getElementById("cWrite").addEventListener("click", function(){
		var text = document.getElementById("cData").value;
		// クッキーに書き込み。期限を2022年2月15日に設定
		var expDay = (new Date("2022/2/15")).toGMTString();
		var data = "Msg="+escape(text)+";expires="+expDay;
		document.cookie = data;
	}, false);
	// 読み込みボタンにイベントを割り当て
	document.getElementById("cRead").addEventListener("click", function(){
		// クッキーから読み込み変数dataに代入
		var data = document.cookie;
		ele.innerText = ele.textContent = unescape(data);
	}, false);
}, false);