window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// クッキーに書き込みができるかどうか調べる
	var flag = navigator.cookieEnabled;
	// 結果を出力
	if (flag === true){
		ele.innerHTML = "クッキーに書き込みできます";
	}else{
		ele.innerHTML = "クッキーに書き込めません";
	}
}, false);