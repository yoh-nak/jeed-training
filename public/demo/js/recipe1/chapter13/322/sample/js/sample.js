window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 更新チェックボタンにイベントを割り当て
	document.getElementById("checkBtn").addEventListener("click", function(){
		// キャッシュ更新
		applicationCache.update();
		// 結果を出力
		ele.innerHTML = "状態："+applicationCache.status+"<br>";
		// イベントハンドラを設定
		applicationCache.oncached = function(){ ele.innerHTML += "キャッシュ成功<br>"; }
		applicationCache.onchecking = function(){ ele.innerHTML += "チェック中...<br>"; }
		applicationCache.ondownloading = function(){ ele.innerHTML += "ダウンロード中...<br>"; }
		applicationCache.onprogress = function(){ ele.innerHTML += "キャッシュ更新中...<br>"; }
		applicationCache.onupdateready = function(){ ele.innerHTML += "更新準備完了<br>"; }
		applicationCache.onerror = function(){ ele.innerHTML += "エラー発生<br>"; }
	}, false);
	// 更新ボタンにイベントを割り当て
	document.getElementById("swapBtn").addEventListener("click", function(){
		if (applicationCache.status == applicationCache.UPDATEREADY){
			// キャッシュ更新
			applicationCache.swapCache();
			// 結果を出力
			ele.innerHTML = "キャッシュを更新しました。3秒後にリロードします";
			// 3秒後にリロード
			setTimeout("location.reload()", 3*1000);
		}else{
			// 結果を出力
			ele.innerHTML = "キャッシュを更新できませんでした";
		}
	}, false);
}, false);