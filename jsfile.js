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

  
  function switchStyle() {
    if (document.getElementById('styleSwitch').checked) {
      document.getElementById('gallery').classList.add("custom");
      document.getElementById('exampleModal').classList.add("custom");
    } else {
      document.getElementById('gallery').classList.remove("custom");
      document.getElementById('exampleModal').classList.remove("custom");
    }
  }