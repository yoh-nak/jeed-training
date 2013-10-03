window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Google Chrome, Safari 6で使用可能な場合に処理
	if (webkitNotifications){
		// 通知するメッセージを準備
		var message = "現在の時間："+(new Date());
		// 通知を行う
		popup = webkitNotifications.createNotification("icon.png", "時間", message);
		// 画面に表示
		popup.show();
		// 通知が表示された場合のイベントを設定
		popup.onshow = function(){
			ele.innerHTML += "show：通知が表示されました<br>";
		}
		// 通知がクリックされた場合のイベントを設定
		popup.onclick = function(){
			ele.innerHTML += "click：通知がクリックされました<br>";
		}
		// 通知が消えた場合のイベントを設定
		popup.onclose = function(){
			ele.innerHTML += "close：通知がクローズされました<br>";
		}
	}
}, false);
