// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('[type="button"]').not(':last-child').click(function() {
      $('li').css('display', 'none');
      $('a[href*="' + $(this).attr('value') + '"]').parent().css('display', 'list-item');
    });
    $('[type="button"]:last-child').click(function() {
      return $('li').css('display', 'list-item');
    });
  });

}).call(this);
