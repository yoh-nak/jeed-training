$$(document).ready ->
	$$('#index').tap ->
		alert 'tap'
		return
	$$('#index').hold ->
		alert 'hold'
		return
	$$('#index').singleTap ->
		alert 'singleTap'
		return
	$$('#index').doubleTap ->
		alert 'doubleTap'
		return
	$$('#index').swipe ->
		alert 'swipe'
		return
	$$('#index').swiping ->
		alert 'swiping'
		return
	$$('#index').swipeLeft ->
		alert 'swipeLeft'
		return
	$$('#index').swipeRight ->
		alert 'swipeRight'
		return
	$$('#index').swipeDown ->
		alert 'swipeDown'
		return
	$$('#index').swipeUp ->
		alert 'swipeUp'
		return
	$$('#index').pinch ->
		alert 'pinch'
		return
	$$('#index').pinching ->
		alert 'pinching'
		return
	$$('#index').pinchIn ->
		alert 'pinchIn'
		return
	$$('#index').pinchOut ->
		alert 'pinchOut'
		return
	$$('#index').rotate ->
		alert 'rotate'
		return
	$$('#index').rotating ->
		alert 'rotating'
		return
	$$('#index').rotateRight ->
		alert 'rotateRight'
		return
	$$('#index').rotateLeft ->
		alert 'rotateLeft'
		return
	return