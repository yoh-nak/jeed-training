window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ローカルストレージからC&Rのキーの値を読み出す
	var myData1 = localStorage.getItem("C&R");
	if (!myData1){ myData1 = "C&Rキーがありません"; }
	// ローカルストレージからbookのキーの値を読み出す
	var myData2 = localStorage.book;
	if (!myData2){ myData2 = "bookキーがありません"; }
	// ローカルストレージからbookのキーの値を読み出す
	var myData3 = localStorage["price"];
	if (!myData3){ myData3 = "priceキーがありません"; }
	// 読み出した結果を出力
	ele.innerHTML = "C&R："+myData1;
	ele.innerHTML += "<br>book："+myData2;
	ele.innerHTML += "<br>price："+myData3;
}, false);