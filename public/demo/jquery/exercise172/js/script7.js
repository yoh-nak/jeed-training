// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('a.open').click(function() {
      $('#floatWindow').fadeIn('fast');
      return false;
    });
    $('#floatWindow a.close').click(function() {
      $('#floatWindow').fadeOut('fast');
      return false;
    });
    $('#floatWindow dl dt').mousedown(function(e) {
      $('#floatWindow').data('clickPointX', e.pageX - $('#floatWindow').offset().left).data('clickPointY', e.pageY - $('#floatWindow').offset().top);
      $(document).mousemove(function(e) {
        $('#floatWindow').css({
          left: e.pageX - $('#floatWindow').data('clickPointX') + 'px',
          top: e.pageY - $('#floatWindow').data('clickPointY') + 'px'
        });
        console.log(e.pageX - $('#floatWindow').data('clickPointX'));
        console.log(e.pageY - $('#floatWindow').data('clickPointY'));
      });
    });
  });

}).call(this);
