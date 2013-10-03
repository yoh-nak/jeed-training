window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ローカルストレージが使えるか調べる
	if (!localStorage){
		ele.innerHTML = "ローカルストレージは使えません";
		return;
	}
	localStorage.setItem("C&R", "研究所");
	localStorage.book = "JavaScript";
	localStorage["price"] = 3980;
	ele.innerHTML = "ローカルストレージにデータを保存しました";
}, false);