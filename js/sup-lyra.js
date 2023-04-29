function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop();
  
    $('#zoomeffectimage').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + ($that.outerHeight() / 6);
      var bottom_of_object1 = $that.position().top + ($that.outerHeight() * 1.4);
      if (bottom_of_window > bottom_of_object && bottom_of_window < bottom_of_object1) {
        $('.zoom-hover-image').addClass('fadeIn');
       
      } else{
        $('.zoom-hover-image').removeClass('fadeIn');
        
      }
    });
  }
  // if in viewport, show the animation
  checkElementLocation();
  
  $(window).on('scroll', function() {
    checkElementLocation();
   
  });