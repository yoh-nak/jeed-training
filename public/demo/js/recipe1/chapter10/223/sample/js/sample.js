window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// フォントとサイズを設定する
	context.font = "24pt 'Tahoma-Bold'";
	// 変形する
	context.transform(0.5, 0, 0, 2, 0, 0);
	// 文字を描画する
	context.fillStyle = "orange";
	context.fillText("Shadow Sample", 10, 50);
	// 現在の変形に加えてさらに変形する
	var rad = -45 * Math.PI / 180;
	var ks = Math.sin(rad);
	var kc = Math.cos(rad);
	context.transform(kc, ks, -ks, kc, 100, 120);
	// 文字を描画する
	context.fillStyle = "blue";
	context.fillText("Shadow Sample", 0, 0);
	// 現在の変形を破棄して新たにマトリックスを設定
	context.setTransform(kc, ks, -ks, kc, 100, 120);
	// 文字を描画する
	context.fillStyle = "red";
	context.fillText("Shadow Sample", 0, 0);
}, false);