window.addEventListener("load", function(){
	// img要素を生成
	var myImage = document.createElement("img");
	// 属性（プロパティ）を設定
	myImage.src = "images/sample.jpg";
	myImage.width = 240;
	myImage.height = 160;
	// div要素の末尾に追加
	document.getElementsByTagName("div")[0].appendChild(myImage);
}, false);