$(window).on('load', function () {
  const seriesFilters = document.querySelectorAll('.series-filter-item');

  seriesFilters.forEach((filter) => {
    filter.addEventListener('click', function () {
      seriesFilters.forEach((el) => {
        el.classList.remove('selected');
      });
      filter.classList.add('selected');
    });
  });
});
