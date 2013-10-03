window.onload = function(){
	var ele = document.getElementsByTagName("div")[1];
	// div要素への参照を変数に代入
	var myArea = document.getElementsByTagName("div")[0];
	// マウスダウンイベントを割り当て
	myArea.onmousedown = function(evt){
		// 黄色に背景色を変更
		myArea.style.backgroundColor = "yellow";
		ele.innerHTML = "マウスボタンが押されました";
	}
	// マウスアップイベントを割り当て
	myArea.onmouseup = function(evt){
		// 黄色を元の色に変更
		myArea.style.backgroundColor = "#ffd592";
		ele.innerHTML = "マウスボタンが離されました";
	}
}
