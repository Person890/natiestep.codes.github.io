import Masonry from 'masonry-layout';


$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 5000  // 2 seconds
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


  function switchStyle() {

      document.getElementById('gallery').classList.add("custom");
      document.getElementById('exampleModal').classList.add("custom");
    
  }



