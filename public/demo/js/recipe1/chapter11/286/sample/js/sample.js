window.addEventListener("load", function(){
	document.getElementById("camData").addEventListener("change", function(){
		// 撮影した画像ファイル読み込むためのオブジェクトを生成
		var reader = new FileReader();
		// 画像の読み込みが完了した時の処理
		reader.onload = function(evt){
			// カメラ画像をsrcプロパティに入れる
			document.getElementById("myPhoto").src = reader.result;
		}
		// カメラで撮影した画像データを指定して読み込ませる
		var imageFile = document.getElementById("camData").files[0];
		reader.readAsDataURL(imageFile);
	}, false);
}, false);
