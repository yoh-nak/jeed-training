window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	window.requestFileSystem(
		// 処理対象はテンポラリ領域
		TEMPORARY,	
		// 確保するサイズ(一覧取得の場合は意味が無いので0)
		0,
		// 成功時のコールバック関数内で処理を行う
		function(fs){
			// ルートディレクトリ一覧を取得
			fs.root.getDirectory("/", {},
				function(dirEntry){
					// ディレクトリ内を読み出すオブジェクトを生成
					var dirReader = dirEntry.createReader();
					// 一覧を取得
					dirReader.readEntries(
						function(list){
							// ファイル／ディレクトリの数だけ繰り返し
							for(var i=0; i<list.length; i++){
								ele.innerHTML += list[i].name;
								if (list[i].isFile){
									// ファイルの場合
									ele.innerHTML += "ファイル<br>";
								}else{
									// ディレクトリの場合
									ele.innerHTML += "ディレクトリ<br>";
								}
							}
						}, fsErr
					);
				}, fsErr
			);
		}, fsErr
	);
	// エラーを一括して処理
	function fsErr(err){ alert("エラー："+err.code); }
}, false);
// ベンダープレフィックスも考慮
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
