$(document).ready(function () {
  let stepper = new mdb.Stepper(document.getElementById('rising-stepper-form'));

  const stepFive = document.getElementById('step-5');
  const stepSix = document.getElementById('step-6');
  const prevBtn = document.getElementById('form-example-prev-step');
  const nextBtn = document.getElementById('form-example-next-step');
  const resetBtn = document.getElementById('form-restart');

  const allProducts = document.querySelectorAll('.product-selection-wrapper input[type="radio"]');

  $(allProducts).each(function () {
    $(this).on('click', function () {
      let dataCustomLogo = $(this).data('custom-logo');
      if ($(this).is(':checked') && dataCustomLogo == false) {
        $(stepFive).addClass('disabled-step');
      } else {
        $(stepFive).removeClass('disabled-step');
      }
    });
  });

  $(resetBtn).on('click', function () {
    $('#primary-content').attr('data-form-completed', 'false');
    let stepper = new mdb.Stepper(document.getElementById('rising-stepper-form'));
  });

  let classListner = setInterval(function () {
    if ($(stepSix).hasClass('stepper-active')) {
      $(nextBtn).css('opacity', '0');
    } else {
      $(nextBtn).css('opacity', '1');
    }
  }, 1500);

  if (nextBtn) {
    document.getElementById('form-example-next-step').addEventListener('click', () => {
      stepper.nextStep();
      $('html, body').scrollTop($('.form-page-title').offset().top);
    });
  }

  if (prevBtn) {
    document.getElementById('form-example-prev-step').addEventListener('click', () => {
      stepper.previousStep();
    });
  }

  // Color Select Show/Hide
  const primaryColorSelect = document.querySelectorAll('input[name="primaryColorRadio"]');
  const primaryStandard = document.querySelector('.primary-color-section .standard-color-select');
  const primaryCustom = document.querySelector('.primary-color-section .custom-color');

  const secondaryColorSelect = document.querySelectorAll('input[name="secondaryColorRadio"]');
  const secondaryStandard = document.querySelector(
    '.secondary-color-section .standard-color-select'
  );
  const secondaryCustom = document.querySelector('.secondary-color-section .custom-color');

  const accentColorSelect = document.querySelectorAll('input[name="accentColorRadio"]');
  const accentStandard = document.querySelector('.accent-color-section .standard-color-select');
  const accentCustom = document.querySelector('.accent-color-section .custom-color');

  $(primaryColorSelect).change(function () {
    let primary_selected_value = $('input[name="primaryColorRadio"]:checked').val();
    if (primary_selected_value == 'customColor') {
      $(primaryCustom).removeClass('hide');
      $(primaryStandard).addClass('hide');
    } else {
      $(primaryCustom).addClass('hide');
      $(primaryStandard).removeClass('hide');
    }
  });

  $(secondaryColorSelect).change(function () {
    let secondary_selected_value = $('input[name="secondaryColorRadio"]:checked').val();
    if (secondary_selected_value == 'customColor') {
      $(secondaryCustom).removeClass('hide');
      $(secondaryStandard).addClass('hide');
    } else {
      $(secondaryCustom).addClass('hide');
      $(secondaryStandard).removeClass('hide');
    }
  });

  $(accentColorSelect).change(function () {
    let accent_selected_value = $('input[name="accentColorRadio"]:checked').val();
    if (accent_selected_value == 'customColor') {
      $(accentCustom).removeClass('hide');
      $(accentStandard).addClass('hide');
    } else {
      $(accentCustom).addClass('hide');
      $(accentStandard).removeClass('hide');
    }
  });

  // Second Logo Show/hide

  const secondLogoRadio = document.querySelectorAll('input[name="logo-number"]');
  const secondLogoSection = document.querySelector('.second-logo');

  $(secondLogoRadio).change(function () {
    let logo_selected_value = $('input[name="logo-number"]:checked').val();
    if (logo_selected_value == 'different-logos') {
      $(secondLogoSection).removeClass('hide');
    } else {
      $(secondLogoSection).addClass('hide');
    }
  });
});
