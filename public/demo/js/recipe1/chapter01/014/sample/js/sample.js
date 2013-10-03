window.onload = function(){
	// イベントを設定する要素を読み出し
	var ele = document.getElementsByTagName("li");
	// 最初のli要素にイベントハンドラを設定
	ele[0].onclick = function(){
		alert("click 1");
	} 
	// 2番目のli要素にイベントリスナーを設定
	ele[1].addEventListener("click", function(evt){
		alert("click 2-1");
	}, true);
	// 2番目のli要素に、さらにイベントリスナーを設定
	ele[1].addEventListener("click", function(evt){
		alert("click 2-2");
	}, true);
}
