// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $(window).keydown(function(e) {
      $('p').html(e.keyCode + '番のキーが押されました');
    }).keyup(function(e) {
      $('p').html(e.keyCode + '番のキーが離されました');
    });
  });

}).call(this);
