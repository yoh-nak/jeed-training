// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    $('input:first-of-type').click(function() {
      $('li:first-of-type').appendTo('ul');
    });
    $('input:last-of-type').click(function() {
      $('li:last-of-type').prependTo('ul');
    });
  });

}).call(this);
