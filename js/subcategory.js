$(window).on('load', function () {
  // color filter functionality
  const colorFilters = document.querySelectorAll('.color-filter');

  if (colorFilters) {
    $(colorFilters).each(function () {
      let currentFilter = $(this);
      let hiddenText = currentFilter.find('.sr-only').text();
      $(currentFilter).find('.color-text').html(hiddenText);
    });
  }

  const filterSection = document.querySelector('.filter-section');
  const mediaQueryMax992 = window.matchMedia('(max-width: 992px)');
  if (mediaQueryMax992.matches && filterSection) {
    const clickHeader = document.querySelector('.filter-section__title');
    const clickIcon = document.querySelectorAll('.filter-icon');
    const btnWrapper = document.querySelector('.filter-section__btn-wrapper');
    const filterWrapper = document.querySelector('.filter-section__filter-wrapper');
    const openIcon = document.querySelector('.filter-open');
    const closeIcon = document.querySelector('.filter-close');
    const filterHeader = document.querySelectorAll('.filter-header');

    $(clickHeader).click(function () {
      $(btnWrapper).toggleClass('show');
      $(filterWrapper).toggleClass('show');
      $(closeIcon).toggleClass('show');
      $(openIcon).toggleClass('hide');
    });
    $(clickIcon).click(function () {
      $(btnWrapper).toggleClass('show');
      $(filterWrapper).toggleClass('show');
      $(closeIcon).toggleClass('show');
      $(openIcon).toggleClass('hide');
    });

    $(filterHeader).each(function () {
      $(this).click(function () {
        $(this).next().toggleClass('show');
        $(this).find('.filter-subhead__open').toggleClass('hide');
        $(this).find('.filter-subhead__close').toggleClass('show');
      });
    });
  }
});
