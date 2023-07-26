// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// $('#Dealer').click(function() {
//   if($('#Dealer').is(':checked')) {$(".dealerindustry").addClass("d-block");$(".enduserindustry").removeClass("d-block");$(".enduserindustry").addClass("d-none"); }
//   else{
//     $(".dealerindustry").removeClass("d-block");
//     $(".enduserindustry").removeClass("d-block");
//     $(".enduserindustry").addClass("d-none");
//   }
// });

// $('#Enduser').click(function() {
//   if($('#Enduser').is(':checked')) {$(".enduserindustry").addClass("d-block");$(".enduserindustry").removeClass("d-none"); $(".dealerindustry").removeClass("d-block"); }
//   else{
//     $(".enduserindustry").removeClass("d-block");
//     $(".dealerindustry").removeClass("d-block");
//   }
// });

$(function () {
  $otherField = $('.message-field');
  $('#showmessagefield').on('change', function () {
    console.log(this.value);
    if (this.value === 'Other') {
      $otherField.addClass('d-block');
    } else {
      $otherField.removeClass('d-block');
    }
  });
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('contact-tab-content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('contact-tab');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

const mediaQueryMax767 = window.matchMedia('(max-width: 767px)');
const contactTabs = document.querySelectorAll('.contact-tab');

if (mediaQueryMax767.matches) {
  $(contactTabs).click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#scroll-to-section').offset().top + -50,
      },
      200
    );
  });
}
