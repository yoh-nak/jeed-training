// Generated by CoffeeScript 1.7.0
(function() {
  $(function() {
    $('dt').click(function() {
      $('dd').css('height', '0');
      $('+dd', this).css('height', '100px');
    });
  });

}).call(this);