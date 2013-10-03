window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 各種オブジェクトを格納する配列を用意
	var myObj = [];
	// 配列オブジェクトを作成
	myObj[0] = new Array();
	// Dateオブジェクトを作成
	myObj[1]= new Date();
	// manオブジェクトを作成
	myObj[2] = new Man("KF", 43);
	// 特定のオブジェクトのインスタンスか調べ結果を出力
	for(var i=0; i<myObj.length; i++){
		// 配列オブジェクトのインスタンスかどうか調べる
		var flag1 = myObj[i] instanceof Array;
		// Dateオブジェクトのインスタンスかどうか調べる
		var flag2 = myObj[i] instanceof Date;
		// 自前のオブジェクトのインスタンスかどうか調べる
		var flag3 = myObj[i] instanceof Man;
		// 結果を出力
		ele.innerHTML += "myObj["+i+"] : Array ?　"+flag1+"<br>";
		ele.innerHTML += "myObj["+i+"] : Date ?　"+flag2+"<br>";
		ele.innerHTML += "myObj["+i+"] : Man ?　"+flag3+"<hr>";
	}
	// 自前のオブジェクトを生成するためのクラス
	function Man(name,age){
		this.name = name;
		this.age = age;
	}
}, false);