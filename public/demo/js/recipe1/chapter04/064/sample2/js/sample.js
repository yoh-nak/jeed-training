window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	var n1 = new BigDecimal("0.1");
	var n2 = new BigDecimal("0.9");
	// var n = n1.add(n2); // subtract(), divide()
	var n = n1.multiply(n2);
	ele.innerHTML = "BigDecimal："+n+"<br>通常：";
	var nn = 0.1 * 0.9;
	ele.innerHTML += nn;
}, false);