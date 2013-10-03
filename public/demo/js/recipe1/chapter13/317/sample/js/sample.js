window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Web Workersが使えるか調べる
	if (!window.Worker){
		ele.innerHTML = "Web Workersは使えません";
		return;
	}
	// ワーカーオブジェクトを作成
	var myWorker = new Worker("js/add.js");
	// 結果を出力
	ele.innerHTML = "ワーカーを作成しました : "+myWorker;
	// ワーカーオブジェクトを破棄
	myWorker = null;
}, false);