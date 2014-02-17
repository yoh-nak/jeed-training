$ ->
	$('#nav .next').click ->
		$('#slide:not(:animated)').animate {
			marginLeft : -1 * $('#slide li').width()
		}, ->
			$('#slide').css('margin-left','0').append $('#slide li:first-child')
			$('#paging li.active').removeClass('active');
			$('#paging li[data-img="' + $('#slide li:first-child img').attr('src') + '"]').addClass('active');
			return
		return
	$('#nav .prev').click ->
		$('#slide:not(:animated)')
			.css('margin-left',-1*$('#slide li').width())
			.prepend($('#slide li:last-child'))
			.animate {
				marginLeft : 0
			}, ->
				$('#paging li.active').removeClass('active');
				$('#paging li[data-img="' + $('#slide li:first-child img').attr('src') + '"]').addClass('active')
				return
		return
	return
