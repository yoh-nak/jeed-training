$$(document).ready ->
#$$ ->
	alert($$.environment().browser)
	alert($$.environment().isMobile)
	alert($$.environment().screen.width)
	alert($$.environment().screen.height)
	#alert($$.environment().os.name)
	#alert($$.environment().os.version)
	$$(document).tap ->
		alert $$.environment().browser
		return
	$$(document).hold ->
		alert $$.environment().browser
		return
	$$(document).singleTap ->
		alert $$.environment().browser
		return
	$$(document).doubleTap ->
		alert $$.environment().browser
		return
	$$(document).swipe ->
		alert $$.environment().browser
		return
	$$(document).swiping ->
		alert $$.environment().browser
		return
	$$(document).swipeLeft ->
		alert $$.environment().browser
		return
	$$(document).swipeRight ->
		alert $$.environment().browser
		return
	$$(document).swipeDown ->
		alert $$.environment().browser
		return
	$$(document).swipeUp ->
		alert $$.environment().browser
		return
	$$(document).pinch ->
		alert $$.environment().browser
		return
	$$(document).pinching ->
		alert $$.environment().browser
		return
	$$(document).pinchIn ->
		alert $$.environment().browser
		return
	$$(document).pinchOut ->
		alert $$.environment().browser
		return
	$$(document).rotate ->
		alert $$.environment().browser
		return
	$$(document).rotating ->
		alert $$.environment().browser
		return
	$$(document).rotateRight ->
		alert $$.environment().browser
		return
	$$(document).rotateLeft ->
		alert $$.environment().browser
		return
	return

###
//Tap event, common event
.tap(function);
//Long tap event (650 miliseconds)
.hold(function);
//A tap-delay event to combine with others events
.singleTap(function);
//If you send two singleTap
.doubleTap(function);


.swipe(function);
//Detect if is swipping
.swiping(function);
//Swipe directions
.swipeLeft(function);
.swipeRight(function);
.swipeDown(function);
.swipeUp(function);


.pinch(function);
//Detect if is pinching
.pinching(function);
//Pinch zoom
.pinchIn(function);
.pinchOut(function);

.rotate(function);
//Detect if is rotating
.rotating(function);
//Rotate directions
.rotateLeft(function);
.rotateRight(function);

var env = $$.environment();

env.browser     //[STRING] Browser of your mobile device
env.isMobile    //[BOOLEAN]
env.os.name     //[STRING] iOS, Android, Blackberry...
env.os.version  //[STRING] Versión of OS
env.screen      //[OBJECT] With properties: width & height

###