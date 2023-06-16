$(document).on('click', '.video-slider-custom .videosrc', function (e) {
    var getvideosrc = $(this).attr('video-src');
    $('.video-src-to-replace').children().attr('src', getvideosrc);   
    $('.video-src-to-replace').get(0).load();
    $('.video-src-to-replace').get(0).play();
    $('.play-btn-employment').hide();
});
$(document).on('click', '.play-btn-employment', function (e) {
    $('.video-src-to-replace').get(0).play();
    $(this).hide();
});
if(window.innerWidth >= 576){	
    var h3height = 0;
      $('.equalheight').each(function() {
            if(h3height < $(this).outerHeight()){
          h3height = $(this).outerHeight();
        };
        });
      $('.equalheight').height(h3height);
    }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
