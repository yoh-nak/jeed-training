window.addEventListener("load", function(){
	// 指定した要素名を持つ要素を返す
	var list = document.getElementsByTagName("span");
	// 繰り返し処理し、背景色をオレンジ色にする
	for(var i=0; i<list.length; i++){
		list[i].style.backgroundColor = "orange";
	}
}, false);