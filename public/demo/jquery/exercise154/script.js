// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('.panel').height($('.content').height());
    $('.panel').on('click touchstart', function() {
      $('.content').toggleClass('open');
    });
  });

}).call(this);
