window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// JSON形式に変換する例として配列を作成
	var myArray = ["DARIUS", 1969,
		{	opacity: 0.5,
			top: "120px",
			flag : true
		},
		["ZAVIGA", "B-WING"]
	];
	// JSON形式に変換
	var jsondata = JSON.stringify(myArray);
	// 結果を出力
	ele.innerHTML = jsondata+"<br>";
	// オブジェクト／メソッドを含む
	var myObject = {
		msg : function(text){ alert(text); },
		data : 1234.56,
		name : "KF"
	};
	// JSON形式に変換
	var jsondata2 = JSON.stringify(myObject);
	// 結果を出力
	ele.innerHTML += jsondata2+"<br>";
	// 自前で独自形式に変換
	var jsondata3 = JSON.stringify(myObject, function(key, value){
		if (new String(value).indexOf("function") > -1) {  
			return new String(value);  
		}  
		return value;  
	});
	// 結果を出力
	ele.innerHTML += jsondata3+"<br>";
}, false);
