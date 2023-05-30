if(window.innerWidth > 767){	
  var h3height = 0;
    $('.max-heightjquery .equalheight').each(function() {
          if(h3height < $(this).outerHeight()){
        h3height = $(this).outerHeight();
      };
      });
    $('.max-heightjquery .equalheight').height(h3height);
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