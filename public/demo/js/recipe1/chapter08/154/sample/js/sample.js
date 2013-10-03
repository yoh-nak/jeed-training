window.addEventListener("load", function(){
	// 指定したCSSクラスをもつ要素を返す
	var list = document.getElementsByClassName("note");
	// 繰り返し処理し、背景色をオレンジ色にする
	for(var i=0; i<list.length; i++){
		list[i].style.backgroundColor = "orange";
	}
}, false);