window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// div要素への参照を変数に代入
	var myArea = document.getElementsByTagName("div")[0];
	// マウスダウンイベントを割り当て
	myArea.addEventListener("mousedown", function(evt){
		// 黄色に背景色を変更
		evt.target.style.backgroundColor = "yellow";
		ele.innerHTML = "マウスボタンが押されました";
	}, false);
	// マウスアップイベントを割り当て
	myArea.addEventListener("mouseup", function(evt){
		// 黄色を元の色に変更
		evt.target.style.backgroundColor = "#ffd592";
		ele.innerHTML = "マウスボタンが離されました";
	}, false);
}, false);
