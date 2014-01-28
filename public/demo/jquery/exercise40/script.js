// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    $('#before').click(function() {
      $('img').attr({
        'src': 'img/before.png',
        title: '変更前'
      });
      $('h1').text('変更前');
    });
    $('#after').click(function() {
      $('img').attr({
        'src': 'img/after.png',
        'title': '変更後'
      });
      $('h1').text('変更後');
    });

    //要領の良い記述1
    /*
    $('#before').click(function() {
      $('img').attr({
        'src': $(this).attr('title'),
        'title': $(this).attr('value')
      });
      $('h1').text($(this).attr('value'));
    });
    $('#after').click(function() {
      $('img').attr({
        'src': $(this).attr('title'),
        'title': $(this).attr('value')
      });
      $('h1').text($(this).attr('value'));
    });
    */

    //要領の良い記述2
    /*
    $('input').click(function() {
      $('img').attr({
        'src': $(this).attr('title'),
        'title': $(this).attr('value')
      });
      $('h1').text($(this).attr('value'));
    });
    */
  });

}).call(this);