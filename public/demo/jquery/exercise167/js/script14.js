// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('ul.sub').hide();
    $('ul.menu li').hover(function() {
      $('> ul:not(:animated)', this).slideDown('fast');
    }, function() {
      $('> ul', this).slideUp('fast');
    });
  });

}).call(this);
