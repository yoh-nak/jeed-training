window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オブジェクトを作成
	var myObj = {
		type : "N",
		code : "bug"
	};
	// オブジェクトにプロパティを追加
	myObj.year = 1987;
	// オブジェクトのプロパティの追加を禁止
	Object.preventExtensions(myObj);
	// オブジェクトにプロパティを追加
	myObj.maker = "irem";
	// オブジェクトのプロパティをRに変更
	myObj.type = "R";
	// オブジェクトのcodeプロパティを削除
	delete myObj.code;
	// オブジェクトの内容を表示する
	for(var i in myObj){
		ele.innerHTML += i + " = " + myObj[i]+"<br>";
	}
}, false);