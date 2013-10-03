window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// WebGLコンテキストを取得
	var context = myCanvas.getContext("webgl") || myCanvas.getContext("experimental-webgl");
	if (context == null){
		ele.innerHTML = "WebGLは使用できません";
	}else{
		ele.innerHTML = "WebGLは使用できます";
	}
}, false);