window.addEventListener("load", function(){
	document.getElementById("calc").addEventListener("click", function(){
		var ele = document.getElementsByTagName("output")[0];
		// フォームに入力された値を読み出す
		var number1 = document.getElementById("num1").value;
		var number2 = document.getElementById("num2").value;
		// BigDecimalオブジェクトにする（パラメータは文字列）
		var n1 = new BigDecimal(number1);
		var n2 = new BigDecimal(number2);
		// 加算した結果を表示
		var n = n1.add(n2);
		ele.innerHTML = "加算："+n+"<br>";
		// 減算した結果を表示
		n = n1.subtract(n2);
		ele.innerHTML += "減算："+n+"<br>";
		// 乗算した結果を表示
		n = n1.multiply(n2);
		ele.innerHTML += "乗算："+n+"<br>";
		// 除算した結果を表示
		n = n1.divide(n2);
		ele.innerHTML += "除算："+n+"<hr>";
		// 通常のJavaScriptでの演算結果
		number1 = parseFloat(number1);
		number2 = parseFloat(number2);
		ele.innerHTML += "加算："+(number1+number2)+"<br>";
		ele.innerHTML += "減算："+(number1-number2)+"<br>";
		ele.innerHTML += "乗算："+(number1*number2)+"<br>";
		ele.innerHTML += "除算："+(number1/number2)+"<br>";
	}, false);
}, false);