$(window).on('load', function () {
  // Setting up custom media queries
  const mediaQuery1200 = window.matchMedia('(min-width: 1200px)');
  const mediaQuerymax1200 = window.matchMedia('(max-width: 1199.98px)');
  const mediaQuery992 = window.matchMedia('(min-width: 992px)');
  const mediaQueryMax992 = window.matchMedia('(max-width: 992px)');

  // Setting up Custom Variables
  const el_autohide = document.querySelector('#main-navbar');
  const searchInput = document.querySelector('#nav-search-field-2');
  const intelSearchResults = document.querySelector('.intel-search-results');
  var searchtab = document.getElementsByClassName('search-dropdown');
  var searchtabdiv = document.getElementsByClassName('search-div');
  var closemobilenav = document.getElementsByClassName('navbar-collapse');
  var closemobilenavtoggle = document.getElementsByClassName('navbar-toggler');
  var opennavbar = document.getElementsByClassName('navbar');

  // Custom Global Navigation JS Begin

  // Show/Hide Search Dropdown JS
  for (let s = 0; s < searchtab.length; s++) {
    searchtab[s].addEventListener('click', function () {
      searchtab[s].classList.toggle('searchshow');
      searchtabdiv[0].classList.toggle('searchdivshow');
      // On mobile, hide an open search box if user scrolls
      if (mediaQuerymax1200.matches) {
        closemobilenav[s].classList.remove('show');
        closemobilenavtoggle[s].classList.add('collapsed');
      }
      if (mediaQuery1200.matches) {
        opennavbar[0].classList.toggle('opensearch');
      }
      $(window).scroll(function () {
        if ($(searchtab[s]).hasClass('searchshow')) {
          $(searchtab[s]).removeClass('searchshow');
          $(searchtabdiv[0]).removeClass('searchdivshow');
        }
      });
    });
  }

  // Custom Search Input Delay and Show Results JS
  function delay(callback, ms) {
    var timer = 0;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  }

  $(searchInput).on(
    'input',
    delay(function (e) {
      if ($(searchInput).val().length > 2) {
        $(intelSearchResults).addClass('show');
      } else {
        $(intelSearchResults).removeClass('show');
      }
    }, 300)
  );

  // Countrie Selector JS
  if (el_autohide) {
    const countries = document.querySelectorAll('.country-grid__item');

    for (let cntry = 0; cntry < countries.length; cntry++) {
      countries[cntry].addEventListener('click', (e) => {
        countries.forEach((country) => {
          if (country !== e.currentTarget) {
            country.classList.remove('country-selected');
          } else if (country == e.currentTarget) {
            country.classList.add('country-selected');
          }
        });
      });
    }
  }
  // Custom Global Navigation JS End

  // Custom Footer JS Begins
  // Check if the media query 992px is true
  if (mediaQuery992.matches) {
    let headerIndex;
    let menuIndex;
    let footerToggle = document.getElementsByClassName('footer-menu-heading');
    let footerMenu = document.getElementsByClassName('footer-list-menu');

    for (headerIndex = 0; headerIndex < footerToggle.length; headerIndex++) {
      footerToggle[headerIndex].setAttribute('aria-expanded', true);
    }

    for (menuIndex = 0; menuIndex < footerMenu.length; menuIndex++) {
      footerMenu[menuIndex].classList.add('show');
    }
  }

  // Custom Dynamic Copywrite Date JS
  var footerCopyRight = document.getElementById('copyright-year');
  if (footerCopyRight) {
    var date = new Date();
    var year = date.getFullYear();

    footerCopyRight.innerHTML = year;
  }
  // Custom Footer JS Ends

  // Custom Site-wide HTML 5 Video JS
  // Autoplay videos start at halfway visible instead of touching the bottom of the browser
  window.addEventListener('load', videoScroll);
  window.addEventListener('scroll', videoScroll);

  function videoScroll() {
    if (document.querySelectorAll('video[autoplay]').length > 0) {
      var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

      for (var i = 0; i < videoEl.length; i++) {
        var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

        if (
          videoClientRect <= windowHeight - videoHeight * 0.5 &&
          videoClientRect >= 0 - videoHeight * 0.5
        ) {
          thisVideoEl.play();
        } else {
          thisVideoEl.pause();
        }
      }
    }
  }
  // If embedded video is set to autoplay, this also adds playsinline for safari
  if (document.querySelectorAll('video[autoplay]').length > 0) {
    videoAutoP = document.querySelectorAll('video[autoplay]');

    for (var vidAP = 0; vidAP < videoAutoP.length; vidAP++) {
      var thisVidAP = videoAutoP[vidAP];
      thisVidAP.setAttribute('playsinline', '');
    }
  }

  $('.modal').on('show.bs.modal', function (e) {
    var $vPlay = $(e.delegateTarget).find('video');
    if ($vPlay.length == 1) {
      $vPlay[0].play(); // use [0] because jQuery returns a list
    }
  });

  $('.modal').on('hide.bs.modal', function (e) {
    var $vPause = $(e.delegateTarget).find('video');
    if ($vPause.length == 1) {
      $vPause[0].pause(); // use [0] because jQuery returns a list
    }
  });
});

$(document).ready(function () {
  const cartTrigger = document.querySelector('#fpp-cart-trigger');
  const cartTriggerLink = document.querySelector('#fpp-cart-trigger a');
  const cartDropdown = document.querySelector('.cart-dropdown-div');
  const cartClose = document.querySelector('.cart-header-close-btn');

  if (cartTrigger && cartDropdown) {
    let openCart = function () {
      $(cartTrigger).addClass('openned');
      $(cartDropdown).addClass('show');
      $(cartTriggerLink).attr('aria-expanded', 'true');
    };

    let closeCart = function () {
      $(cartTrigger).removeClass('openned');
      $(cartDropdown).removeClass('show');
      $(cartTriggerLink).attr('aria-expanded', 'false');
    };

    $(cartTrigger).click(function (event) {
      openCart();
      event.stopPropagation();
    });

    $(cartClose).click(function (event) {
      closeCart();
      event.stopPropagation();
    });

    $(window).scroll(function () {
      if ($(cartDropdown).hasClass('show')) {
        closeCart();
      }
    });

    $('body').click(function (event) {
      if (event.target !== cartDropdown && !cartDropdown.contains(event.target)) {
        closeCart();
      }
    });
  }
});
