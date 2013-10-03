window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	window.requestFileSystem(
		// 処理対象はテンポラリ領域
		TEMPORARY,	
		// 確保するサイズ(削除の場合は意味が無いので0)
		0,
		// 成功時のコールバック関数内で削除処理を行う
		function(fs){
			// tempディレクトリを削除
			fs.root.getDirectory("temp", {},
				function(dirEntry){
					dirEntry.removeRecursively(function(){
						ele.innerHTML = dirEntry.fullPath+"を削除しました";
					}, fsErr);
				}, fsErr
			);
		}, fsErr
	);
	// エラーを一括して処理
	function fsErr(err){ alert("エラー："+err.code); }
}, false);
// ベンダープレフィックスも考慮
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
