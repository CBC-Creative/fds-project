$(window).on('load', function () {
  const langText = document.querySelectorAll('.ca__lang-text');

  if (langText) {
    $(langText).each(function () {
      $(this).click(function () {
        $(langText).removeClass('ca__lang-active');
        $(this).addClass('ca__lang-active');
      });
    });
  }
});
