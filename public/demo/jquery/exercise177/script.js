// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('a').one('click', function() {
      $('img').attr({
        'src': $(this).attr('href'),
        'alt': $(this).attr('title')
      });
      return false;
    });
  });

}).call(this);