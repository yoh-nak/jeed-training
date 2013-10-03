window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列オブジェクトを作成
	var myObj = [ "Android", 4 ];
	// オブジェクトの内容をkeysで表示
	ele.innerHTML = "■keys<br>";
	var list1 = Object.keys(myObj);
	for(i=0; i<list1.length; i++){
		ele.innerHTML += list1[i]+" : " +myObj[i]+"<br>";
	}
	// オブジェクトの内容をgetOwnPropertyNamesで表示
	ele.innerHTML += "<hr>■getOwnPropertyNames<br>";
	var list2 = Object.getOwnPropertyNames(myObj);
	for(i=0; i<list2.length; i++){
		ele.innerHTML += list2[i]+" : " +myObj[i]+"<br>";
	}
}, false);