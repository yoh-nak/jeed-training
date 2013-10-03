window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	window.requestFileSystem(
		// ファイルの作成先をテンポラリ領域にする
		TEMPORARY,	
		// 確保するサイズ(1024bytes×100 = 100KB)
		1024*100,
		// 成功時のコールバック関数
		function(fs){
			// sample.txtファイル情報を取得
			fs.root.getFile("sample.txt", { },
				function(fileEntry){
					ele.innerHTML = fileEntry.name+"ファイルのURLは以下の通りです<br>";
					ele.innerHTML += fileEntry.toURL();
				},
				// 失敗時のコールバック関数
				function(err){ ele.innerHTML = "ファイル生成エラー："+err.code; }
			);
		},
		// 失敗時のコールバック関数
		function(err){ ele.innerHTML = "エラー："+err.code; }
	);
}, false);
// ベンダープレフィックスも考慮
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
