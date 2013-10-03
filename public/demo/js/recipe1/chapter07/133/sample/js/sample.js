window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input");
	// img要素を読み出す
	var myImage = document.getElementsByTagName("img")[0];
	// ボタンにイベントを設定する
	btn[0].addEventListener("click", function(){
		var ele = document.getElementsByTagName("output")[0];
		// 表示されている画像の元の横幅を読み出す
		var w = myImage.naturalWidth;
		// 表示されている画像の元の縦幅を読み出す
		var h = myImage.naturalHeight;
		// 結果を出力
		ele.innerHTML = "元の横幅："+w+"<br>元の縦幅："+h;
	}, false);
	// ボタンにイベントを設定する
	btn[1].addEventListener("click", function(){
		// 表示されている画像の横幅を元の幅にする
		myImage.width = myImage.naturalWidth;
		// 表示されている画像の縦幅を元の幅にする
		myImage.height = myImage.naturalHeight;
	}, false);
}, false);