window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// テンポラリの使用状況を調べる
	checkCapacity(TEMPORARY, 0);
	// 永続的に保存される領域の使用状況を調べる
	checkCapacity(PERSISTENT, 1);
	// 使用状況を調べる
	function checkCapacity(diskType, idx){
		window.storageInfo.queryUsageAndQuota(
			diskType,
			// 成功時の処理を行うコールバック関数
			function(usage, quota){
				ele[idx].innerHTML = "使用量 : "+usage+"バイト／全容量 : "+quota;
			},
			// 失敗時の処理を行うコールバック関数
			function(err){ ele[idx].innerHTML = "エラー："+err.code; }
		);
	}
}, false);
// ベンダープレフィックスも考慮
window.storageInfo = window.storageInfo || window.webkitStorageInfo;
