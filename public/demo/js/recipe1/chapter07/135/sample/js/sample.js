window.addEventListener("load", function(){
	// img要素にアクセスするために参照を変数に代入
	var myImage = document.getElementsByTagName("img")[0];
	// mouseoverイベントを割り当てる
	myImage.addEventListener("mouseover", function(){
		this.src = "images/photo0.jpg";
	}, false);
	// mouseoutイベントを割り当てる
	myImage.addEventListener("mouseout", function(){
		this.src = "images/photo_gray0.jpg";
	}, false);
}, false);