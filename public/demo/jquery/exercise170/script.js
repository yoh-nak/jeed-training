// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $(window).mousemove(function(e) {
      $('#screen').html('screenX: ' + e.screenX + ' screenY: ' + e.screenY);
    });
    $(window).mousemove(function(e) {
      $('#client').html('clientX: ' + e.clientX + ' clientY: ' + e.clientY);
    });
    $(document).mousemove(function(e) {
      $('#page').html('pageX: ' + e.pageX + ' pageY: ' + e.pageY);
    });
    $('img').mousemove(function(e) {
      $('#offset').html('offsetX: ' + e.offsetX + ' offsetY: ' + e.offsetY);
    });
  });

}).call(this);