// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('input:nth(0)').click(function() {
      $('#first:not(:animated)').fadeTo('slow', 1);
    });
    $('input:nth(1)').click(function() {
      $('#first:not(:animated)').fadeTo('slow', 0.5);
    });
    $('input:nth(2)').click(function() {
      $('#first:not(:animated)').fadeTo('slow', 0);
    });
  });

}).call(this);
