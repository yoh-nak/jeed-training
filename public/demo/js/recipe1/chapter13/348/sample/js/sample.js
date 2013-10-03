window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// GamePadオブジェクト (Google Chromeの場合)
	navigator.gamepads = navigator.gamepads || navigator.webkitGamepads;
	// ゲームパッドが使用できるか調べる
	if (navigator.gamepads){
		// 使用可能な場合の処理
		ele.innerHTML = "ゲームパッドは使用できます。<br>";
		// 接続されているパッドの数を取得
		var n = navigator.gamepads.length;
		ele.innerHTML += "接続数："+n;
	}else{
		ele.innerHTML = "ゲームパッドは接続されていません";
	}
}, false);
