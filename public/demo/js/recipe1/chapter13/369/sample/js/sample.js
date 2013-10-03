window.addEventListener("load", function(){
	// Notificationオブジェクトを入れる変数
	var popup = null;
	// Google Chrome, Safari 6で使用可能な場合に処理
	if (webkitNotifications){
		// 通知するメッセージを準備
		var message = "現在の時間："+(new Date());
		// 通知を行う
		popup = webkitNotifications.createNotification("icon.png", "時間", message);
		// 画面に表示
		popup.show();
	}
	// ボタンにイベントを割り当て
	document.getElementById("hide").addEventListener("click", function(){
		// Notificationオブジェクトが存在する場合のみ処理
		if (popup){
			// 通知を消す
			popup.cancel();
		}
	}, false);
}, false);
