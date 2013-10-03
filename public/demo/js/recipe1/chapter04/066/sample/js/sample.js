window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 処理する数値を指定
	var n = 15;
	// 論理積を使って数値を偶数にする
	var num1 = n & 0xfffffffe;
	// 結果を表示
	ele.innerHTML = n+"と0xfffffffeの論理積："+num1+"<br>";
	// 処理する数値を指定
	n = 12;
	// 論理和を使って数値を奇数にする
	var num2 = n | 1;
	// 結果を表示
	ele.innerHTML += n+"と1の論理和："+num2+"<br>";
	// 処理する数値を指定
	n = 0;
	// 排他的論理和を使って数値のビットを反転させ結果を表示
	var num3 = n ^ 1;
	ele.innerHTML += n+"と1の排他的論理和："+num3+"<br>";
	// 排他的論理和を使って数値のビットを反転させ結果を表示
	var num4 = num3 ^ 1;
	ele.innerHTML += num3+"と1の排他的論理和："+num4+"<br>";
}, false);