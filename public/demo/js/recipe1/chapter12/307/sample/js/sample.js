window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	window.requestFileSystem(
		// 処理対象はテンポラリ領域
		TEMPORARY,	
		// 確保するサイズ(ここでは意味が無いので0)
		0,
		// 成功時のコールバック関数内で処理を行う
		function(fs){
			// test.txtを移動する
			fs.root.getFile("/test.txt", {},
				function(fileEntry){
					// Documentディレクトリに移動
					fs.root.getDirectory("Document", {}, function(targetDir){
							// 同じ名前で移動
							fileEntry.moveTo(targetDir, "test.txt", function(movefile){
								// 移動先のファイルパスを取得
								var fullPath = movefile.fullPath;
								ele.innerHTML = movefile.name+"を"+fullPath+"に移動しました。";
							}, fsErr);

						}
					, fsErr);
				}, fsErr
			);
		}, fsErr
	);
	// エラーを一括して処理
	function fsErr(err){ alert("エラー："+err.code); }
}, false);
// ベンダープレフィックスも考慮
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
