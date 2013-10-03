window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	window.requestFileSystem(
		// 処理対象はテンポラリ領域
		TEMPORARY,	
		// 確保するサイズ(ここでは意味が無いので0)
		0,
		// 成功時のコールバック関数内で処理を行う
		function(fs){
			// test.txtをコピーする
			fs.root.getFile("/test.txt", {},
				function(fileEntry){
					fileEntry.getParent(function(targetDir){
							// testCopy時間という新たな名前でコピーを作成
							var time = Date.now();
							var newFileName = "testCopy"+time+".txt";
							fileEntry.copyTo(targetDir, newFileName, function(copyfile){
								ele.innerHTML = copyfile.name+"としてコピーしました。";
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
