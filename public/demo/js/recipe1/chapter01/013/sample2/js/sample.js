window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// エラーを発生させる
	try{
		// 入力ミスによるエラー
		var n = new number(12.3);
	}catch(e){
		ele.innerHTML = e.message+"<br>";
		ele.innerHTML += e.lineNumber+"行でエラーです<br>";
		ele.innerHTML += e.fileName;
	}
}, false);