window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	window.requestFileSystem(
		// ファイルの作成先をテンポラリ領域にする
		TEMPORARY,	
		// 確保するサイズ(読み出しの場合は意味が無いので0)
		0,
		// 成功時のコールバック関数内でファイル生成を行う
		function(fs){
			// sample.txtファイルを読み出して表示
			fs.root.getFile("sample.txt", {},
				function(fileEntry){
					fileEntry.file(function(file){
						// FileReaderでファイル読み出し
						var reader = new FileReader();
						// 読み込み完了時の処理（文字をテキストエリアに出力）
						reader.onload = function(){
							ele.innerText = this.result;
						}
						// テキストファイルとして読み出し
						reader.readAsText(file);
					});
				}, fsErr
			);
		}, fsErr
	);
	// エラーを一括して処理
	function fsErr(err){ alert("エラー："+err.code); }
}, false);
// ベンダープレフィックスも考慮
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
