// ローカルストレージ内のデータを削除する
window.addEventListener("load", function(){
	document.getElementById("deleteButton").addEventListener("click", function(){
		var delKeyName = document.getElementById("keyName").value;
		var data = window.localStorage.removeItem(delKeyName);
		document.getElementById("stat").innerHTML = "削除しました";
	}, true);
	document.getElementById("deleteAllButton").addEventListener("click", function(){
		window.localStorage.clear();
		document.getElementById("stat").innerHTML = "全て削除しました";
	}, true);
}, true);
