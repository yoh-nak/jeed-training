window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Indexed DBオブジェクトが使用できるか調べる
	var db = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
	if(!db){
		ele.innerHTML = "Indexed Databaseは使用できません";
		return;
	}
	// DB作成のボタンにイベントを割り当てる
	document.getElementById("createDB").addEventListener("click", function(){
		// データベースバージョンを変数に入れておく
		var dbVer = 1;
		// データベースを開く（もしくは新規作成）。データベースバージョンは1
		var req = db.open("testDB001", dbVer);
		// データベースのオープンに成功した時の処理
		req.onsuccess = function(evt){
			ele.innerHTML = "データベースをオープンしました<br>";
			var myDB = this.result;
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
						var objStore = myDB.createObjectStore("memo");
					}catch(e){
						ele.innerHTML += "すでにオブジェクトストアがあります。削除してから実行してください";
						return;
					}
					ele.innerHTML += "オブジェクトストアの作成に成功しました<br>";
					ele.innerHTML += "新たなデータベースバージョン："+myDB.version+"<br>";
				}
			}else{
				ele.innerHTML += "オブジェクトストアはすでに作成済みです";
			}
		}
		// データベースのオープンに失敗した時の処理
		req.onerror = function(evt){
			ele.innerHTML = "データベースのオープンに失敗しました";
		}
	}, false);
	// DB削除のボタンにイベントを割り当てる
	document.getElementById("deleteDB").addEventListener("click", function(){
		db.deleteDatabase("testDB001");
		ele.innerHTML += "データベースを削除しました";
	}, false);
}, false);
