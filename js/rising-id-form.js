$(document).ready(function () {
  let stepper = new mdb.Stepper(document.getElementById('rising-stepper-form'));

  const lastStep = document.getElementById('step-6');
  const prevBtn = document.getElementById('form-example-prev-step');
  const nextBtn = document.getElementById('form-example-next-step');
  const resetBtn = document.getElementById('form-restart');

  $(resetBtn).on('click', function () {
    $('#primary-content').attr('data-form-completed', 'false');
    let stepper = new mdb.Stepper(document.getElementById('rising-stepper-form'));
  });

  let classListner = setInterval(function () {
    if ($(lastStep).hasClass('stepper-active')) {
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
});
