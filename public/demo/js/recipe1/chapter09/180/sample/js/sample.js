window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// div要素への参照を変数に代入
	var myArea = document.getElementsByTagName("div")[0];
	// クリックイベントを割り当て
	myArea.addEventListener("click", function(evt){
		ele.innerHTML = "クリックしました";
		evt.target.style.backgroundColor = "yellow";
	}, false);
	// ダブルクリックイベントを割り当て
	myArea.addEventListener("dblclick", function(evt){
		ele.innerHTML = "ダブルクリックしました";
	}, false);
}, false);
