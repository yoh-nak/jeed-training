// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('input').val('入力してください').css('color', '#CCCCCC').one('focus', function() {
      $(this).val('').css('color', '#000000');
    }).blur(function() {
      if ($(this).val() === '') {
        $(this).val('入力してください').css('color', '#CCCCCC').one('focus', function() {
          $(this).val('').css('color', '#000000');
        });
      }
    });
  });

}).call(this);
