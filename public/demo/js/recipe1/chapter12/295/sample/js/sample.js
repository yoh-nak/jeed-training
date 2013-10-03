window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 指定した容量を確保できるか調べる
	window.storageInfo.requestQuota(
		// 種類を指定（永続的か一時的か）
		TEMPORARY,
		// 確保するサイズ（バイト数）／100KB確保できるか？
		1024*100,
		// 成功時の処理を行うコールバック関数
		function(bytes){
			ele.innerHTML = bytes+"バイト分は使用可能です";
		},
		// 失敗時の処理を行うコールバック関数
		function(err){
			ele.innerHTML = "エラー!!<br>"+err.code;
		}
	);
}, false);
// ベンダープレフィックスも考慮
window.storageInfo = window.storageInfo || window.webkitStorageInfo;
