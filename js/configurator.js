$(window).on('load', function () {
  let productWrapper = document.querySelectorAll('.prod-link-block');
  let configAccordions = document.querySelectorAll('.accordion-item');

  if (configAccordions) {
    $(configAccordions).each(function () {
      let filterToggle = $(this).find('.show-hide-filters');
      let filterContainer = $(this).find('.config-filters');
      let hideFilt = $(this).find('.hide-filt');
      let showFilt = $(this).find('.show-filt');

      $(filterToggle).on('click', function () {
        $(hideFilt).toggleClass('hide');
        $(showFilt).toggleClass('show');
        $(filterContainer).toggleClass('hide');
      });
    });
  }

  if (productWrapper) {
    $(productWrapper).each(function () {
      let prodDataTrigger = $(this).find('.trigger-icon');
      let prodDataPopup = $(this).find('.popup-content');

      $(prodDataTrigger).on('click', function () {
        $(prodDataTrigger).toggleClass('triggered');
        $(prodDataPopup).toggleClass('show');
      });
    });

    $('.popup-content').on('click', function (event) {
      event.stopPropagation();
    });

    $('body').click(function (event) {
      if (event.target.closest('.triggered', '.show')) {
        return;
      } else {
        $('.popup-content').removeClass('show');
        $('.trigger-icon').removeClass('triggered');
      }
    });
  }
});
