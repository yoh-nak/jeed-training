window.addEventListener("load", function(){
	// イベントを設定する要素を読み出し
	var ele = document.getElementsByTagName("a");
	// 最初のa要素にイベントリスナーを設定
	ele[0].addEventListener("click", function(evt){
		// クリック時の処理
		alert("[1]クリックしました");
		// ブラウザのデフォルトのイベントを禁止
		evt.preventDefault();
		// イベントが伝達されるのを禁止
		evt.stopPropagation();
	}, false);
	// 最初のa要素にさらにイベントリスナーを設定
	ele[0].addEventListener("click", function(evt){
		alert("さらにクリックしました");
	}, false);
}, false);
