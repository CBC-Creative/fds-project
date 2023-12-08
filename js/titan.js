$(window).on('load', function () {
  const mediaQuery992 = window.matchMedia('(min-width: 992px)');
  const mediaQueryMax992 = window.matchMedia('(max-width: 991.99px)');

  const titanSlides = document.querySelectorAll('.titanSliderGrid.carousel-item');

  $(titanSlides).each(function () {
    let highlightTrigger = this.querySelectorAll('.design-details-wrapper');

    $(highlightTrigger).each(function () {
      let dataSlideTrigger = $(this).data('highlight-trigger');
      let highlightImg = $(this)
        .closest('.titanSliderGrid')
        .find('.titanHighlightImg[data-highlight-id="' + dataSlideTrigger + '"]');

      if (mediaQueryMax992.matches) {
        $(this).on('click', function () {
          if ($(highlightImg).hasClass('show')) {
            $('.titanHighlightImg').removeClass('show');
          } else {
            $('.titanHighlightImg').removeClass('show');
            $(highlightImg).addClass('show');
          }
        });
      }

      if (mediaQuery992.matches) {
        $(this).hover(
          function () {
            $('.titanHighlightImg').removeClass('show');
            $(highlightImg).addClass('show');
          },
          function () {
            $('.titanHighlightImg').removeClass('show');
          }
        );
      }
    });
  });
});
