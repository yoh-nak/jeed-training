// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('tr:even').css('background-color', 'red');
    $('tr:odd').css('background-color', 'blue');
    $('tr').click(function() {
      $(this).prependTo('tbody');
      $('tr:even').css('background-color', 'red');
      $('tr:odd').css('background-color', 'blue');
    });
  });

}).call(this);
