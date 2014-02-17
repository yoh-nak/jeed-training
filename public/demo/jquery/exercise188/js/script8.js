// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('#nav .next').click(function() {
      $('#slide:not(:animated)').animate({
        marginLeft: -1 * $('#slide li').width()
      }, function() {
        $('#slide').css('margin-left', '0').append($('#slide li:first-child'));
      });
    });
    $('#nav .prev').click(function() {
      $('#slide:not(:animated)').css('margin-left', -1 * $('#slide li').width()).prepend($('#slide li:last-child')).animate({
        marginLeft: 0
      }, function() {});
    });
  });

}).call(this);
