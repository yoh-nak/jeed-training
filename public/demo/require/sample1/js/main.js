require([
	"libs/library1",
	"libs/library2"
], function() {
    hoge();
    foo();
});

//1度読み込んだライブラリーは読み込み時の実行は行われない
require([
	"libs/library1",
	"libs/library2"
], function() {
	//ただし関数は実行される
    hoge();
    foo();
});
