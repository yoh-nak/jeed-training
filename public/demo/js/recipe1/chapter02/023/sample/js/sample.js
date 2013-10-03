window.addEventListener("load", function(){
	// オブジェクトを生成
	var company = { name : "C&R研究所", address : "新潟県" };
	// オブジェクトを継承して新たなオブジェクトを生成
	var myCompany1 = Object.create(company);
	// オプションを指定して生成
	var myCompany2 = Object.create(company, {
		owner : {
				value : "Yoshinari",	// プロパティの内容
				writable : false,	// 書き込み可能かどうか
				enumerable : true,	// 列挙可能。for...inで出る
				configurable : false	// 再定義可能かどうか
		 },
		stype : {
				value : "男性",	// プロパティの内容
				writable : false,	// 書き込み可能かどうか
				enumerable : false,	// 列挙不可。for...inで出ない
				configurable : true	// 再定義可能かどうか
		 }
	});
	// 結果を出力
	outObj(company, "company");
	outObj(myCompany1, "myCompany1");
	outObj(myCompany2, "myCompany2");
	// オブジェクトの内容を出力する関数
	function outObj(obj, text){
		var ele = document.getElementsByTagName("output")[0];
		ele.innerHTML += "■"+text+"の内容<br>";
		for(var i in obj){
			ele.innerHTML += i + " = " + obj[i] + "<br>";
		}
		ele.innerHTML += "<hr>";
	}
}, false);