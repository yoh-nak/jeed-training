window.addEventListener("load", function(){
	var btn = document.getElementById("chk");
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		var ele = document.getElementsByTagName("output")[0];
		// ラジオボタンの選択状況を読み出し
		var radioBtn = document.forms["selectFoods"]["f1"];
		// チェックボックスの選択状態を読み出し
		var checkBtn = document.querySelectorAll("input[type=checkbox]");
		// 読み出した結果を出力
		ele.innerHTML = "■ラジオボタン<br>"
		for(var i=0; i<radioBtn.length; i++){
			ele.innerHTML += "radioBtn"+i+"："+radioBtn[i].checked+"<br>";
		}
		ele.innerHTML += "■チェックボックス<br>";
		for(var i=0; i<checkBtn.length; i++){
			ele.innerHTML += "radioBtn"+i+"："+checkBtn[i].checked+"<br>";
		}
		// デフォルトイベントを禁止
		evt.preventDefault();
		return false;
	}, false);
}, false);