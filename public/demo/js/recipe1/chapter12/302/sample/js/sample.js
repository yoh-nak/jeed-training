window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	window.requestFileSystem(
		// ディレクトリの作成先をテンポラリ領域にする
		TEMPORARY,	
		// 確保するサイズ(1024bytes×100 = 100KB)
		1024*100,
		// 成功時のコールバック関数
		function(fs){
			// 各種ディレクトリを生成
			makeSubDirectory(fs.root, "temp");
			makeSubDirectory(fs.root, "temp/photo");
			makeSubDirectory(fs.root, "temp/music");
			makeSubDirectory(fs.root, "temp/photo/2012");
		}, fsErr
	);
	// サブディレクトリを作成。常に上書きで作成
	function makeSubDirectory(baseDir, dirName){
		baseDir.getDirectory(dirName, { create: true },
			function(dirEntry){
				ele.innerHTML += dirEntry.name+"ディレクトリを作成しました<br>";
				ele.innerHTML += "ディレクトリパス："+dirEntry.fullPath+"<br>";
			}, fsErr
		);
	}
	// エラーを一括して処理
	function fsErr(err){ alert("エラー："+err.code); }
}, false);
// ベンダープレフィックスも考慮
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
