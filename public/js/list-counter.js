$(function(){
    $('.list-group').each(function(i){
      $('.list-group:nth('+i+') .badge.badge-info').each(function(j){
        $(this).text(j);
      });
    });
});