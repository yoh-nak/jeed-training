window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Google Chrome, Safari 6の場合
	if (webkitNotifications){
		ele.innerHTML = "Web Notifications APIは使用できます<br>";
		// 通知状態を取得
		var stat = webkitNotifications.checkPermission();
		// 通知状況を表示
		ele.innerHTML += "状態："+stat+"<br>";
		// 通知が許可されているか調べる
		if(stat == 1){
			// 許可するように要求する
			webkitNotifications.requestPermission(function(){
				// 通知状態を取得して画面に表示
				var stat = webkitNotifications.checkPermission();
				ele.innerHTML += "現在の状態："+stat;
			});
		}
	}else{
		ele.innerHTML = "Web Notifications APIは使用できません";
	}
}, false);
