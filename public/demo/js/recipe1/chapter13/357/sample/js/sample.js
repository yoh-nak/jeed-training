window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Indexed DBオブジェクトの読み出し
	var db = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
	var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.mozIDBTransaction;
	var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.mozIDBKeyRange;
	var myDB = null;	// データベースへの有無を示す変数
	// DB作成のボタンにイベントを割り当てる
	document.getElementById("openDB").addEventListener("click", function(){
		// データベースバージョンを変数に入れておく
		var dbVer = 1;
		// データベースを開く（もしくは新規作成）。データベースバージョンは1
		var req = db.open("testDB002", dbVer);
		// データベースのオープンに成功した時の処理
		req.onsuccess = function(evt){
			ele.innerHTML = "データベースをオープンしました<br>";
			myDB = this.result;
			ele.innerHTML += "データベース名："+myDB.name+"<br>";
			ele.innerHTML += "バージョン："+myDB.version+"<br>";
		}
		// データベースのオープンに失敗した時の処理
		req.onerror = function(evt){
			ele.innerHTML = "データベースのオープンに失敗しました<br>";
		}
	}, false);
	// DB読み出しのボタンにイベントを割り当てる
	document.getElementById("readDB").addEventListener("click", function(){
		// データベースが開かれているか確認
		if (!myDB){
			ele.innerHTML += "データベースが開かれていません<br>";
			return;
		}
		// トランザクションの設定。memoに対しては読み出し専用(READ_ONLY=0)
		var trans = myDB.transaction(["memo"], IDBTransaction.READ_ONLY);
		var store = trans.objectStore("memo");
		var req = store.count();
		// 正しく読み出せた場合の処理
		req.onsuccess = function(evt) {
			// 登録合計数が入る
			var total = evt.target.result;
			// 最初のメモ内容を読み出し
			for(var i=1; i<total; i++){
				var req = store.get(i);
				// 正しく読み出せた場合の処理
				req.onsuccess = function(evt) {
					var data = evt.target.result;
					// undefinedならデータがない
					if (!data){
						ele.innerHTML += "<hr>データがありません<br>";
						return;
					}
					var text = data.mymemo;
					// 読み出した結果を表示
					ele.innerHTML += "<hr>"+text+"<br>";
				}
			}
		}
	}, false);
}, false);
