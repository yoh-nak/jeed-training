// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('li:nth-of-type(1)').on('click touchstart', function() {
      $('nav div').removeClass('second').removeClass('third').addClass('first');
    });
    $('li:nth-of-type(2)').on('click touchstart', function() {
      $('nav div').removeClass('first').removeClass('third').addClass('second');
    });
    $('li:nth-of-type(3)').on('click touchstart', function() {
      $('nav div').removeClass('first').removeClass('second').addClass('third');
    });
  });

}).call(this);