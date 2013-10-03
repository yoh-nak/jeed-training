window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	window.requestFileSystem(
		// ファイルの作成先をテンポラリ領域にする
		TEMPORARY,	
		// 確保するサイズ(1024bytes×100 = 100KB)
		1024*100,
		// 成功時のコールバック関数内でファイル生成を行う
		function(fs){
			// sample.txtファイルを生成。すでにある場合は上書き
			fs.root.getFile("sample.txt", { create: true, exclusive: false },
				function(fileEntry){
					// ファイル書き込み
					fileEntry.createWriter(
						function(fileWriter){
							// 書き込み完了時の処理
							fileWriter.onwrite = function(){
								ele.innerHTML = "書き込み完了";
							}
							// 書き込みできなかった時の処理
							fileWriter.onerror = function(err){
								ele.innerHTML = "書き込みエラー："+err.code;
							}
							// Blobを作成して書き込む
							var blobData = new BlobBuilder();
							// 書き込む内容（テキスト）
							blobData.append("File API sample");
							// 標準テキストで書き込む
							fileWriter.write(blobData.getBlob("text/plain"));
						}, fsErr	// 失敗時のコールバック関数
					);
				}, fsErr	// 失敗時のコールバック関数
			);
		}, fsErr	// 失敗時のコールバック関数
	);
	// エラーを一括して処理
	function fsErr(err){ alert("エラー："+err.code); }
}, false);
// ベンダープレフィックスも考慮
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
BlobBuilder = WebKitBlobBuilder;
