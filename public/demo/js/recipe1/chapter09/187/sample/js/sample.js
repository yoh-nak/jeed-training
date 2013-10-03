window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// フォームの参照を変数に代入
	var myForm = document.getElementsByTagName("form")[0];
	// フォームにresetイベントを割り当て
	myForm.addEventListener("reset", function(evt){
		ele.innerHTML = "リセットボタンを押しました。";
	}, false);
	// テキストフィールドにcutイベントを割り当て
	myForm.addEventListener("submit", function(evt){
		ele.innerHTML = "送信ボタンを押しました。";
		// 空欄チェック
		var text = document.getElementById("myFld").value;
		if (!text){
			ele.innerHTML += "<br>空欄です";
			// デフォルトのイベントを禁止
			evt.preventDefault();
		}
	}, false);
}, false);
