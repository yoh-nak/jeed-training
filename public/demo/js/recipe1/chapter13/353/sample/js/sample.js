window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Indexed DBオブジェクトが使用できるか調べる
	var db = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
	if(db){
		ele.innerHTML = "Indexed Databaseは使用できます";
	}else{
		ele.innerHTML = "Indexed Databaseは使用できません";
	}
}, false);
