window.attachEvent("onload", function(){
	// イベントを設定する要素を読み出し
	var ele = document.getElementsByTagName("a");
	// 最初のa要素にイベントリスナーを設定
	ele[0].attachEvent("onclick", function(){
		// クリック時の処理
		alert("[1]クリックしました");
		// ブラウザのデフォルトのイベントを禁止
		event.returnValue = false;
		// イベントが伝達されるのを禁止
		event.cancelBubble = true;
	});
	// 最初のa要素にさらにイベントリスナーを設定
	ele[0].attachEvent("onclick", function(evt){
		alert("さらにクリックしました");
	});
});
