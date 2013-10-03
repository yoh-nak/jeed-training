window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数に数値を代入
	var n = 0xffff+1;
	// 1ビットずつシフトしながら(1/2にしながら)表示(合計8回)
	for(var i=1; i<=8; i++){
		ele.innerHTML += i+"：" + n + "<br>";
		// 右に1ビットシフト。これで数値が1/2になる。
		n = n >>> 1;
	}
}, false);