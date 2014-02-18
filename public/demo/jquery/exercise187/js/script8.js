// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('#slide li:last-child').prependTo('#slide');
    $('#slide').css('margin-left', '-320px');
    $('#slide a').click(function() {
      return false;
    }).on('touchstart', function(e) {
      e.preventDefault();
      $(this).data('href', $(this).attr('href'));
      $(this).data('startX', e.originalEvent.touches[0].pageX).data('startY', e.originalEvent.touches[0].pageY).data('moveX', 0).data('moveY', 0);
    }).on('touchmove', function(e) {
      $(this).data('moveX', e.originalEvent.touches[0].pageX - $(this).data('startX')).data('moveY', e.originalEvent.touches[0].pageY - $(this).data('startY'));
      $('#slide').css('margin-left', $(this).data('moveX') - 320 + 'px');
    }).on('touchend', function(e) {});
  });

}).call(this);
