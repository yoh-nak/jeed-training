window.addEventListener("load", function(){
	document.getElementById("camData").addEventListener("change", function(){
		// 撮影した画像ファイル読み込むためのオブジェクトを生成
		var reader = new FileReader();
		// 画像の読み込みが完了した時の処理
		reader.onload = function(evt){
			// Imageオブジェクトを作成
			var img = new Image();
			// 画像データの読み込み完了時にCanvasに描画
			img.onload = function(){
				var canvasObj = document.getElementById("myCanvas");
				var context = canvasObj.getContext("2d");
				context.drawImage(this, 0, 0, 400, 320);
			}
			// カメラ画像をsrcプロパティに入れる
			img.src = reader.result;
		}
		// カメラで撮影した画像データを指定して読み込ませる
		var imageFile = document.getElementById("camData").files[0];
		reader.readAsDataURL(imageFile);
	}, false);
}, false);
