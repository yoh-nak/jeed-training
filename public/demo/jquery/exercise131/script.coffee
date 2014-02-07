$ ->
	$("input").click ->
		$("table").css "display", "none"
		$("ul").css "display", "block"

		$("ul").html "\
			<li>" + $("tr td:nth-child(1):parent:eq(0)").html() + "</li>\
			<li>" + $("tr td:nth-child(1):parent:eq(1)").html() + "</li>\
			<li>" + $("tr td:nth-child(2):parent:eq(0)").html() + "</li>\
			<li>" + $("tr td:nth-child(2):parent:eq(1)").html() + "</li>\
			<li>" + $("tr td:nth-child(3):parent:eq(0)").html() + "</li>\
			<li>" + $("tr td:nth-child(3):parent:eq(1)").html() + "</li>\
			<li>" + $("tr td:nth-child(4):parent:eq(0)").html() + "</li>\
			<li>" + $("tr td:nth-child(4):parent:eq(1)").html() + "</li>\
			<li>" + $("tr td:nth-child(5):parent:eq(0)").html() + "</li>\
			<li>" + $("tr td:nth-child(5):parent:eq(1)").html() + "</li>"

		###
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
		###

		###
		html = ""
		i = 1

		while i <= 5
			j = 0

			while j <= 1
				html += "<li>" + $("tr td:nth-child(" + i + "):parent:eq(" + j + ")").html() + "</li>"
				j++
			i++

		$("ul").html html
		###

		return

	return
