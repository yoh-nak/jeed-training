// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('body').append('<div id="grayLayer"></div><div id="overLayer"></div>');
    $('dt').click(function() {
      $('#grayLayer').show();
      $('#overLayer').show().html($('+dd', this).html());
    });
    $('#grayLayer').click(function() {
      $(this).hide();
      $('#overLayer').hide();
    });
  });

}).call(this);