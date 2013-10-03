window.addEventListener("load", function(){
	// li要素にアクセス
	var ele = document.querySelector("#mz li");
	// 最初の文字の色を赤色にする
	ele.firstChild.style.color = "red";
	// noteクラス内のli項目にアクセス
	var list = document.querySelectorAll(".note li")
	// 繰り返し処理し、背景色をオレンジ色にする
	for(var i=0; i<list.length; i++){
		list[i].style.backgroundColor = "orange";
	}
}, false);