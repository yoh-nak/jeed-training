window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// おおもとのオブジェクトにプロパティを設定
	// Objectだけに設定されるプロパティ
	Object.money = 1000;	
	// 全てのオブジェクトに継承されるプロパティ
	Object.prototype.work = "書籍出版";
	// オブジェクトを生成
	var company = { name : "C&R研究所", address : "新潟県" };
	// 新たなプロパティに書き込み
	company.startYear = "1991年7月";
	// 新規にオブジェクトを生成
	var myObj = new Object();
	// プロパティを読み出し
	ele.innerHTML = "nameプロパティ："+company.name+"<br>";
	ele.innerHTML += "startYearプロパティ："+company.startYear+"<br>";
	ele.innerHTML += "company.moneyプロパティ："+company.money+"<br>";
	ele.innerHTML += "Object.moneyプロパティ："+Object.money+"<br>";
	ele.innerHTML += "myObj.moneyプロパティ："+myObj.money+"<br>";
	ele.innerHTML += "myObj.workプロパティ："+myObj.work+"<br>";
	ele.innerHTML += "company.workプロパティ："+company.work+"<br>";
	ele.innerHTML += "Math.workプロパティ："+Math.work+"<br>";
}, false);