window.onload = function(){
	// イベントを設定する要素を読み出し
	var ele = document.getElementsByTagName("a");
	// 最初のa要素にイベントハンドラを設定
	ele[0].onclick = function(evt){
		// クリック時の処理
		alert("[1]クリックしました");
		// ブラウザのデフォルトのイベントを禁止
		evt.preventDefault();
		// イベントが伝達されるのを禁止
		evt.stopPropagation();
	}
	// 2番目のa要素にイベントハンドラを設定
	ele[1].onclick = function(evt){
		// クリック時の処理
		alert("[2]クリックしました");
	}
}
