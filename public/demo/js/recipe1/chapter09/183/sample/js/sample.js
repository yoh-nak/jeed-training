window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// div要素への参照を変数に代入
	var myArea = document.getElementsByTagName("div")[0];
	// contextmenuイベントを割り当て
	myArea.addEventListener("contextmenu", function(evt){
		// 黄色に背景色を変更
		evt.target.style.backgroundColor = "yellow";
		ele.innerHTML = "マウスの右ボタンが押されました";
		// デフォルトのイベントを禁止
		evt.preventDefault();
	}, false);
}, false);
