// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('input').click(function() {
      $('.add').html('<a href="img/after.png">変更</a>');
    });
    $('.add').on('click', 'a', function() {
      $('img').attr('src', $(this).attr('href'));
      return false;
    });
  });

}).call(this);