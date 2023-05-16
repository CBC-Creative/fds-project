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
$('#Dealer').click(function() {
  if($('#Dealer').is(':checked')) {$(".dealerindustry").addClass("d-block");$(".enduserindustry").removeClass("d-block");$(".enduserindustry").addClass("d-none"); }
  else{
    $(".dealerindustry").removeClass("d-block");
    $(".enduserindustry").removeClass("d-block");
    $(".enduserindustry").addClass("d-none");
  }
});
$('#Enduser').click(function() {
  if($('#Enduser').is(':checked')) {$(".enduserindustry").addClass("d-block");$(".enduserindustry").removeClass("d-none"); $(".dealerindustry").removeClass("d-block"); }
  else{
    $(".enduserindustry").removeClass("d-block");
    $(".dealerindustry").removeClass("d-block");
  }
});
$(function() {
  $otherField = $(".message-field");
  $('#showmessagefield').on('change', function() {
    console.log(this.value);
    if(this.value === 'Other') {
      $otherField.addClass('d-block');
    } else {
      $otherField.removeClass('d-block');
    }
  });
});
// $('#areaofintrest').on('change', function() {
//   if ($('#areaofintrest').val() === "Product Area of Interest*") {
//     $('#areaofintrest').parent().parent().addClass('select-validated');
//   } else{
//     $('#areaofintrest').parent().parent().removeClass('select-validated');
//   }
// });
// $('.submit-contact').click(function () {
//   if ($('#areaofintrest').val() === "Product Area of Interest*") {
   
//     $('#areaofintrest').parent().parent().addClass('select-validated');
//   } else{
//     $('#areaofintrest').parent().parent().removeClass('select-validated');
//   }
// })

