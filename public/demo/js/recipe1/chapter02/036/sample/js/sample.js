window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// オブジェクトを作成
	var myObj = { x : 1, y : 2, z : 99 };
	// 内容を表示
	for(var i in myObj){ ele[0].innerHTML += i + " = " + myObj[i]+"<br>"; }
	// zプロパティだけ削除
	delete myObj.z;
	// 内容を表示
	for(var i in myObj){ ele[1].innerHTML += i + " = " + myObj[i]+"<br>"; }
	// オブジェクトを削除
	myObj = null;
	// 内容を表示。オブジェクトがないので内も出力されない
	for(var i in myObj){ ele[2].innerHTML += i + " = " + myObj[i]+"<br>"; }
	// オブジェクトを新たに作成
	var tempObj = function(){ this.zz = 123; };
	tempObj.prototype.z = 3;
	var myObj = new tempObj();
	// 内容を表示
	for(var i in myObj){ ele[3].innerHTML += i + " = " + myObj[i]+"<br>"; }
	// z, zzプロパティを削除。自分自身のプロパティであるzzしか削除できない
	delete myObj.z;
	delete myObj.zz;
	// 内容を表示
	for(var i in myObj){ ele[4].innerHTML += i + " = " + myObj[i]+"<br>"; }
}, false);