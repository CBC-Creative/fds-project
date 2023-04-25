$(document).ready(function () {
  // Setup media queries for future use
  const maxW768 = window.matchMedia('(max-width: 768px)');

  // Finish Picker functionality
  const premiumBtn = document.querySelector('#premium-finishes');
  const intrendBtn = document.querySelector('#intrend-finishes');
  const standardBtn = document.querySelector('#standard-finishes');
  const allButtons = document.querySelectorAll('.finish-group-btn');
  const allSwatches = document.querySelectorAll('.swatch');
  const allImages = document.querySelectorAll('.finish-images img');
  const premiumSwatches = document.querySelectorAll('.swatch.premium');
  const intrendSwatches = document.querySelectorAll('.swatch.intrend');
  const standardSwatches = document.querySelectorAll('.swatch.standard');
  const finishSubtitleSpan = document.querySelector('#finish-text-change');

  // Do Stuff
  $(premiumBtn).click(function () {
    let finishSubtitle = $(premiumBtn).data('id');
    $(finishSubtitleSpan).html(finishSubtitle);

    $(allButtons).removeClass('active');
    $(premiumBtn).addClass('active');
    $(allSwatches).removeClass('active');
    $(premiumSwatches).addClass('active');

    if (maxW768.matches) {
      $('html, body').animate(
        {
          scrollTop: $('.swatches-subtitle').offset().top + -50,
        },
        600
      );
    }
  });
  $(intrendBtn).click(function () {
    let finishSubtitle = $(intrendBtn).data('id');
    $(finishSubtitleSpan).html(finishSubtitle);

    $(allButtons).removeClass('active');
    $(intrendBtn).addClass('active');
    $(allSwatches).removeClass('active');
    $(intrendSwatches).addClass('active');

    if (maxW768.matches) {
      $('html, body').animate(
        {
          scrollTop: $('.swatches-subtitle').offset().top + -50,
        },
        600
      );
    }
  });
  $(standardBtn).click(function () {
    let finishSubtitle = $(standardBtn).data('id');
    $(finishSubtitleSpan).html(finishSubtitle);

    $(allButtons).removeClass('active');
    $(standardBtn).addClass('active');
    $(allSwatches).removeClass('active');
    $(standardSwatches).addClass('active');

    if (maxW768.matches) {
      $('html, body').animate(
        {
          scrollTop: $('.swatches-subtitle').offset().top + -50,
        },
        600
      );
    }
  });

  $(allSwatches).each(function () {
    let currentSwatch = $(this);
    let finishName = $(currentSwatch).data('color');

    $(currentSwatch).click(function () {
      $(allImages).removeClass('active');
      $(allImages)
        .filter('[data-image="' + finishName + '"]')
        .addClass('active');
    });
  });
});
