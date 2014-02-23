$$(document).ready ->
#$$ ->
	alert($$.environment().browser)
	alert($$.environment().isMobile)
	alert($$.environment().screen.width)
	alert($$.environment().screen.height)
	#alert($$.environment().os.name)
	#alert($$.environment().os.version)
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