window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	window.requestFileSystem(
		// ディレクトリの作成先をテンポラリ領域にする
		TEMPORARY,	
		// 確保するサイズ(1024bytes×100 = 100KB)
		1024*100,
		// 成功時のコールバック関数
		function(fs){
			// Documentディレクトリを生成。すでにある場合は上書き
			fs.root.getDirectory("Document", { create: true },
				function(dirEntry){
					ele.innerHTML = dirEntry.name+"ディレクトリを作成しました<br>";
					ele.innerHTML += "ディレクトリパス："+dirEntry.fullPath;
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
