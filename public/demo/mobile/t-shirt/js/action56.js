function tab(){
     $('.tab_list a').on('touchstart click',function(e){
          $('.tab_list .active').removeClass('active');
          $(this).parent().addClass('active');
          $('.tab_content.active').removeClass('active');
          $(this.hash).addClass('active');
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