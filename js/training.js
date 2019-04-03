$(function (){
    $('.arrow i').click(function (){
        
        $('html , body').animate({
             scrollTop : $('#features').offset().top
             
        }, 2000);
       
    });
    
    var leftArrow = $('.fa-chevron-left');
    var rightArrow = $('.fa-chevron-right');
    
    
    function check(){
    
    $('.client:first').hasClass('active')? leftArrow.fadeOut() : leftArrow.fadeIn();
    $('.client:last').hasClass('active')? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
      check();
    $('.testimonial i').click(function (){
       
        if($(this).hasClass('fa-chevron-right')){
            
            $('.testimonial .active').fadeOut(100 , function (){
               $(this).removeClass('active').next('.client').addClass('active').fadeIn(1000);
                check();
                
            });
        }else{
            $('.testimonial .active').fadeOut(100 , function (){
               $(this).removeClass('active').prev('.client').addClass('active').fadeIn(1000);
                check();
            });
        }
       });
   
    $(window).scroll(function (){
        
        if($(window).scrollTop() > 600){
            
            $('.btn-scroll').fadeIn(2000);
        }else{
            $('.btn-scroll').fadeOut(1000);
        }
    });
    $('.btn-scroll').click(function (){
      $('body , html').animate({
         
            scrollTop : 0
      } , 1000);
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
 });