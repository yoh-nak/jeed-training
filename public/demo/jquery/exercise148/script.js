// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('a').click(function() {
      $('img').attr({
        'src': $(this).attr('href'),
        'alt': $(this).text()
      });
      $('h1').text($(this).text());
      return false;
    });
  });

}).call(this);
