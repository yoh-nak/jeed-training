window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ボタン要素の読み出し
	var btn = document.getElementById("check");
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		// 入力されたメールアドレスを取得
		var userMail = document.getElementById("adrs").value;
		// 入力されたURLを取得
		var userSite = document.getElementById("website").value;
		// 入力された電話番号を取得
		var userTel = document.getElementById("telephone").value;
		// 結果を出力
		ele.innerHTML = "メール："+userMail+"<br>";
		ele.innerHTML += "ウェブ："+userSite+"<br>";
		ele.innerHTML += "電話番号："+userTel;
	}, false);
}, false);