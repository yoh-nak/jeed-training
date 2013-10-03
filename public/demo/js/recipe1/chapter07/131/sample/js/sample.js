window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 画像オブジェクトを生成
	var myImage = new Image(80, 60);
	// 画像のURLを設定する
	myImage.src = "images/photo1.jpg";
	// 結果を出力
	ele.appendChild(myImage);
}, false);