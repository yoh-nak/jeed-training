// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('dt').click(function() {
      $('+ dd > span:only-of-type', this).addClass('show');
    });
    $('span').click(function() {
      $(this).removeClass('show');
    });
  });

}).call(this);
