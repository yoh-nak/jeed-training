// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('img').hover(function() {
      $(this).attr('src', 'img/after.png');
    }, function() {
      $(this).attr('src', 'img/before.png');
    });
  });

}).call(this);