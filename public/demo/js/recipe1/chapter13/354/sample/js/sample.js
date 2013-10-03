window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Indexed DBオブジェクトが使用できるか調べる
	var db = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
	if(!db){
		ele.innerHTML = "Indexed Databaseは使用できません";
		return;
	}
	// データベースを開く（もしくは新規作成）。データベースバージョンは1
	var req = db.open("testDB001", 1);
	// データベースのオープンに成功した時の処理
	req.onsuccess = function(evt){
		// 開いたデータベースを取得(IDBDatabaseオブジェクト)
		var myDB = this.result;
		// 結果を表示
		ele.innerHTML = "データベースをオープンしました<br>";
		ele.innerHTML += "データベース名："+myDB.name+"<br>";
		ele.innerHTML += "バージョン："+myDB.version;
	}
	// データベースのオープンに失敗した時の処理
	req.onerror = function(evt){
		ele.innerHTML = "データベースのオープンに失敗しました";
	}
}, false);
