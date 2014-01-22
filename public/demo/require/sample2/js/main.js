require([
	"libs/library1",
	"libs/library2"
], function() {
	hoge();//library1のhoge()
	foo();//library2のfoo()
	require([
		"libs/library3",
		"libs/library4"
	], function() {
		//library3のhoge()
	    hoge();
	    //library4のfoo()
	    foo();
	});
});

