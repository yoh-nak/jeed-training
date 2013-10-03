window.addEventListener("load", function(){
	// 指定した名前を持つ要素を返す
	var list = document.getElementsByName("game");
	// 繰り返し処理し、背景色をオレンジ色にする
	for(var i=0; i<list.length; i++){
		list[i].parentNode.style.backgroundColor = "orange";
	}
}, false);