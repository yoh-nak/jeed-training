// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var timerId;
    $('#slide li').each(function() {
      return $('#paging').append($('<li></li>').attr('data-img', $('img', this).attr('src')));
    });
    $('#paging li:first-child').addClass('active');
    timerId = setInterval(function() {
      $('#nav .next').click();
    }, 5000);
    $('#slideGalley').hover(function() {
      $('#nav').show();
      clearInterval(timerId);
    }, function() {
      $('#nav').hide();
      timerId = setInterval(function() {
        $('#nav .next').click();
      }, 5000);
    });
    $('#nav .next').click(function() {
      $('#slide:not(:animated)').animate({
        marginLeft: -1 * $('#slide li').width()
      }, function() {
        $('#slide').css('margin-left', '0').append($('#slide li:first-child'));
        $('#paging li.active').removeClass('active');
        $('#paging li[data-img="' + $('#slide li:first-child img').attr('src') + '"]').addClass('active');
      });
    });
    $('#nav .prev').click(function() {
      $('#slide:not(:animated)').css('margin-left', -1 * $('#slide li').width()).prepend($('#slide li:last-child')).animate({
        marginLeft: 0
      }, function() {
        $('#paging li.active').removeClass('active');
        $('#paging li[data-img="' + $('#slide li:first-child img').attr('src') + '"]').addClass('active');
      });
    });
  });

}).call(this);