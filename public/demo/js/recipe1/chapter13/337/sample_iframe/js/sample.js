window.addEventListener("message", function(evt){
	var ele = document.getElementsByTagName("output");
	// 受信したメッセージを画面に出力
	ele[0].innerText = ele[0].textContent = evt.data;
	// 送信元のオリジンを画面に出力
	ele[1].innerText = ele[1].textContent = evt.origin;
}, false);