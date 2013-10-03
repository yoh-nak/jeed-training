window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input");
	// img要素を読み出す
	var myImage = document.getElementsByTagName("img")[0];
	// ボタンにイベントを設定する
	btn[0].addEventListener("click", function(){
		var ele = document.getElementsByTagName("output")[0];
		// 表示されている画像の横幅を読み出す
		var w = myImage.width;
		// 表示されている画像の縦幅を読み出す
		var h = myImage.height;
		// 結果を出力
		ele.innerHTML = "横幅："+w+"<br>縦幅："+h;
	}, false);
	// ボタンにイベントを設定する
	btn[1].addEventListener("click", function(){
		// 表示されている画像の横幅を320pxにする
		myImage.width = 320;
		// 表示されている画像の縦幅を240pxにする
		myImage.height = 240;
	}, false);
}, false);