function tab(){
     $('.tab_list a').on('touchstart click',function(e){
          alert('tab');
          e.preventDefault();  
     });
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