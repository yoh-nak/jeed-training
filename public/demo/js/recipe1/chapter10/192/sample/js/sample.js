window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (context == null){
		ele.innerHTML = "Canvas 2D Contextは使用できません";
	}else{
		ele.innerHTML = "Canvas 2D Contextは使用できます";
	}
}, false);