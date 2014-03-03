$(function(){
     $('.more').on('touchstart click', function(e){
          //alert('.more');
          $(this).parent().find('li').fadeIn();
          $(this).hide();
          e.preventDefault();       
     });
});