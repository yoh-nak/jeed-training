// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('body').append('<div id="grayLayer"></div><div id="overLayer"></div>');
    $('a.modal').click(function() {
      $('#grayLayer').show();
      $('#overLayer').show().html('<img src="' + $(this).attr('href') + '" alt="">');
    });
  });

}).call(this);
