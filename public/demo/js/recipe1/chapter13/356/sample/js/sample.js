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
			// バージョンチェック
			if (myDB.version != dbVer){
				// 新たなバージョンを設定
				var setVersion = myDB.setVersion(dbVer);
				// バージョン設定に成功した場合
				setVersion.onsuccess = function(){
					// オブジェクトストアを作成。キーは自動インクリメント
					try{
						// Chromeでは{ autoIncrement : true }がないとエラー
						var objStore = myDB.createObjectStore("memo", { autoIncrement : true });
					}catch(e){
						ele.innerHTML += "すでにオブジェクトストアがあります。削除してから実行してください";
						return;
					}
					ele.innerHTML += "オブジェクトストアの作成に成功しました<br>";
					ele.innerHTML += "新たなデータベースバージョン："+myDB.version+"<br>";
				}
			}else{
				ele.innerHTML += "オブジェクトストアはすでに作成済みです<br>";
			}
		}
		// データベースのオープンに失敗した時の処理
		req.onerror = function(evt){
			ele.innerHTML = "データベースのオープンに失敗しました<br>";
		}
	}, false);
	// DB削除のボタンにイベントを割り当てる
	document.getElementById("deleteDB").addEventListener("click", function(){
		db.deleteDatabase("testDB001");
		ele.innerHTML += "データベースを削除しました<br>";
	}, false);
	// DB保存のボタンにイベントを割り当てる
	document.getElementById("saveDB").addEventListener("click", function(){
		// データベースが開かれているか確認
		if (!myDB){
			ele.innerHTML += "データベースが開かれていません<br>";
			return;
		}
		// テキストフィールドに入力されているメモの内容を読み出す
		var memotext = document.getElementById("memoData").value;
		// トランザクションの設定。memoに対して読み書き(READ_WRITE=1)
		var trans = myDB.transaction(["memo"], IDBTransaction.READ_WRITE);
		var store = trans.objectStore("memo");
		// メモ内容を書き込み
		store.put({ "mymemo" : memotext });
		ele.innerHTML += "「"+memotext+"」の内容を保存しました<br>";
	}, false);
}, false);
