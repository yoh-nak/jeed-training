// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('img[src="img/jquery.jpg"]').mouseover(function() {
      $(this).attr('src', 'img/jquery_on.jpg');
    }).mouseout(function() {
      $(this).attr('src', 'img/jquery.jpg');
    });
    $('img[src="img/javascript.jpg"]').mouseover(function() {
      $(this).attr('src', 'img/javascript_on.jpg');
    }).mouseout(function() {
      $(this).attr('src', 'img/javascript.jpg');
    });
    $('img[src="img/css.jpg"]').mouseover(function() {
      $(this).attr('src', 'img/css_on.jpg');
    }).mouseout(function() {
      $(this).attr('src', 'img/css.jpg');
    });
    $('img[src="img/html.jpg"]').mouseover(function() {
      $(this).attr('src', 'img/html_on.jpg');
    }).mouseout(function() {
      $(this).attr('src', 'img/html.jpg');
    });
  });

}).call(this);