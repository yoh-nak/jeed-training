window.addEventListener("load", function(){
	// Google Chrome, Safari 6で使用可能な場合に処理
	if (webkitNotifications){
		// 通知するメッセージを準備
		var message = "現在の時間："+(new Date());
		// 通知を行う
		var popup = webkitNotifications.createNotification("icon.png", "時間", message);
		// 画面に表示
		popup.show();
	}
}, false);
