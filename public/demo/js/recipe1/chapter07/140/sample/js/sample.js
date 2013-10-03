window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("button")[0];
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		var ele = document.getElementsByTagName("output")[0];
		// 数値テキストフィールドをvalueで読み出し+記号で処理
		var num1 = document.getElementById("oNumber").value;
		num1 = num1 + 7;
		// 数値テキストフィールドvalueAsNumberで読み出+記号で処理
		var num2 = document.getElementById("oNumber").valueAsNumber;
		num2 = num2 + 7;
		// 日付テキストフィールドの値をvalueで読み出す
		var resDay1 = document.getElementById("reservedDay").value;
		// 日付テキストフィールドの値をvalueAsDateで読み出す
		var resDay2 = document.getElementById("reservedDay").valueAsDate;
		// 読み出した結果を出力
		ele.innerHTML = "■個数に7を加算した結果<br>"
		ele.innerHTML += "num1："+num1+"<br>";
		ele.innerHTML += "num2："+num2+"<br>";
		ele.innerHTML += "■日付の読み出し<br>";
		ele.innerHTML += "resDay1："+resDay1+"<br>";
		ele.innerHTML += "resDay2："+resDay2;
		// デフォルトイベントを禁止
		evt.preventDefault();
		return false;
	}, false);
}, false);