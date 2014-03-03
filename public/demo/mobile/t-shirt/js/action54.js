function tab(){
     alert('tab');
}

function more(){
     $('.more').on('touchstart click',function(e){
          $(this).parent().find('li').fadeIn();
          $(this).hide();
          e.preventDefault();          
     });
}

$(function(){
     tab();
     more();
});