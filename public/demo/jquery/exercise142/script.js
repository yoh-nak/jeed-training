// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('#image1').click(function() {
      $('p:not(:animated)').animate({
        marginLeft: '-200px'
      }, 'slow', 'swing');
    });
    $('#image2').click(function() {
      $('p:not(:animated)').animate({
        marginLeft: '0'
      }, 'slow', 'swing');
    });
  });

}).call(this);
