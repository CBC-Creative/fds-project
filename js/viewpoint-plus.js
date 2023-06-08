$(document).ready(function() {
  $('.form-check-input').change(function() {
    $('.form-check-label').removeClass('active-sub');
    if($('.form-check-input').is(':checked')) {
      $(this).next().addClass('active-sub');
     } 
});
});

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