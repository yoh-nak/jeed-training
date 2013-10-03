window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// WebSocketオブジェクトが使用できるか調べる
	if (window.WebSocket){
		// 使用可能な場合の処理
		ele.innerHTML = "WebSocketは使用できます。";
	}else{
		ele.innerHTML = "WebSocketは使用できません";
	}
}, false);
