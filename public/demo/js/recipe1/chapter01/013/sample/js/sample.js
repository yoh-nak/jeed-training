window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// エラーが発生する可能性がある処理を行う
	try{
		// iPadというオブジェクトは存在しないのでエラー
		var myDevice = new iPad();
	}catch(e){
		ele[0].innerHTML = "例外が発生："+e;
	}
	// throwを使ってエラーを投げる
	try{
		throw "Crash!!";
	}catch(e){
		ele[1].innerHTML = "例外が発生："+e;
	}
}, false);