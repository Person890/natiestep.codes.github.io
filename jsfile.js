$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000  // 2 seconds
  });



 
  
  (function($) {          
      $(document).ready(function(){                    
          $(window).scroll(function(){                          
              if ($(this).scrollTop() > 200) {
                  $('#menu').fadeIn(500);
              } else {
                  $('#menu').fadeOut(500);
              }
          });
      });
  })(jQuery);
