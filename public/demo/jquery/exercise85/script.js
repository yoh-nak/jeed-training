// Generated by CoffeeScript 1.7.0
(function() {
  $(function() {
    $('li').click(function() {
      $(this).addClass('turn').removeClass('fade');
      $('li').not(this).addClass('fade').removeClass('turn');
    });
  });

}).call(this);