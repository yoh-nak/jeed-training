window.addEventListener("load", function(){
	// オブジェクトを生成
	var company = { name : "C&R研究所", address : "新潟県" };
	// オプションを指定して生成
	var myCompany = Object.create(company, {
		owner : {
				enumerable : true,	// 列挙可能。for...inで出る
				configurable : true,	// 再定義可能かどうか
				set: function(value){
					alert("設定内容は「"+value+"」です");
					__value = value;	// 書き込み内容を保存
				},
				get : function(){
					alert("読み出した内容："+__value);
				}
		 }
	});
	// オブジェクトに値を設定
	myCompany.owner = "Ikeda";
	var ownerName = myCompany.owner;
}, false);