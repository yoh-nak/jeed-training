// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('img').click(function() {
      $('#inner:not(:animated)').animate({
        marginRight: '-600px'
      }, '500ms', 'swing', function() {
        $('img:last-of-type').prependTo('#inner');
        $('#inner').css('margin-right', '-800px');
      });
    });
  });

}).call(this);
