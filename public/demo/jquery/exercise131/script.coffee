$ ->
	$("input").click ->
		$("table").css "display", "none"
		$("ul").css "display", "block"
		html = "<li>" + $("tr td:nth-child(1):parent:eq(0)").html() + "</li>"
		html += "<li>" + $("tr td:nth-child(1):parent:eq(1)").html() + "</li>"
		html += "<li>" + $("tr td:nth-child(2):parent:eq(0)").html() + "</li>"
		html += "<li>" + $("tr td:nth-child(2):parent:eq(1)").html() + "</li>"
		html += "<li>" + $("tr td:nth-child(3):parent:eq(0)").html() + "</li>"
		html += "<li>" + $("tr td:nth-child(3):parent:eq(1)").html() + "</li>"
		html += "<li>" + $("tr td:nth-child(4):parent:eq(0)").html() + "</li>"
		html += "<li>" + $("tr td:nth-child(4):parent:eq(1)").html() + "</li>"
		html += "<li>" + $("tr td:nth-child(5):parent:eq(0)").html() + "</li>"
		html += "<li>" + $("tr td:nth-child(5):parent:eq(1)").html() + "</li>"
		$("ul").html html
		return

	return
