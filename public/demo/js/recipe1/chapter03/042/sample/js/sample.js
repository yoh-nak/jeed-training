window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	// 配列要素が10未満かどうか調べる
	var flag1 = myArray.every(check);
	var flag2 = myArray.some(check);
	// 配列から偶数を取り除く
	var ary = myArray.filter(function(element, index, targetArray){
		if (element & 1){
			return element;
		}
	});
	// 判断するコールバック関数
	function check(element, index, targetArray){
		// 読み出した要素を調べる
		if (element < 5){
			return true;
		}else{
			return false;
		}
	}
	// 結果を出力
	ele.innerHTML = "every："+flag1+"<br>";
	ele.innerHTML += "some："+flag2+"<br>";
	ele.innerHTML += "filter："+ary.toString();
}, false);