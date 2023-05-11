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
  // If at least 1200px or wider, remove MDBootstrap dropdown toggle attribute
  if (mediaQuery1200.matches) {
    var dropdown = document.querySelectorAll('.navbar .dropdown-toggle');
    for (let v = 0; v < dropdown.length; v++) {
      dropdown[v].removeAttribute('data-mdb-toggle');
    }
  }
  // If 1199.98px or less, do this:
  if (mediaQuerymax1200.matches) {
    var navContainers = document.querySelectorAll('.navbar .dropdown-toggle');
    var removenavactive = document.querySelectorAll('.navbar .mobile-back-btn');
    var navlink = document.querySelectorAll('.navbar-nav .nav-item');
    var closenav = document.querySelectorAll('.navbar .navbar-toggler');
    var subnav = document.querySelectorAll('.navbar .sub-dropdown');
    var subnavmenu = document.querySelectorAll('.navbar .sub-dropdown-menu');
    var dropdownitem = document.querySelectorAll('.navbar .dropdown-item');
    var navbarCollapse = document.querySelector('#navbarSupportedContent');

    // Hides an open mobile nav on scroll
    $(window).scroll(function () {
      if ($(navbarCollapse).hasClass('show')) {
        $(navbarCollapse).addClass('mobile-navbar-collapse-onscroll');
        setTimeout(function () {
          $(navbarCollapse).removeClass('show');
          $(navbarCollapse).removeClass('mobile-navbar-collapse-onscroll');
        }, 300);
      }
    });

    // Whenever you click on a Tier 1 Nav Item on Mobile, Open its Subnav menu
    for (var i = 0; i < navContainers.length; i++) {
      navContainers[i].addEventListener('click', function () {
        for (var ij = 0; ij < navlink.length; ij++) {
          navlink[ij].classList.add('active');
        }
      });
    }

    // Whenever you click on the "Back" link in each Subnav, close the subnav menu
    for (var n = 0; n < removenavactive.length; n++) {
      removenavactive[n].addEventListener('click', function () {
        for (var ik = 0; ik < navlink.length; ik++) {
          navlink[ik].classList.remove('active');
        }
      });
    }

    // This closes any open subnav if you close the mobile menu with the hamburger menu
    for (var k = 0; k < closenav.length; k++) {
      closenav[k].addEventListener('click', function () {
        for (var im = 0; im < navlink.length; im++) {
          navlink[im].classList.remove('active');
        }
      });
    }

    // When on mobile, this stop the clicking of a submenu item from also activiating the parent link when clicked.
    for (var a = 0; a < dropdownitem.length; a++) {
      dropdownitem[a].addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }

    // When clicking on a tier 2 nav item that has a subnav, this prevents the link from activating and shows the submenu instead
    for (let l = 0; l < subnav.length; l++) {
      subnav[l].addEventListener('click', function (e) {
        e.preventDefault();
        subnavmenu[l].classList.toggle('showsub');
        subnav[l].classList.toggle('open');
      });
    }
  }

  // Show/Hide Nav on Scroll JS
  // Check if the media query 1200px is true
  if (mediaQuery1200.matches && el_autohide) {
    // Run Code
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove('scrolled-down');
        el_autohide.classList.add('scrolled-up');
      } else {
        el_autohide.classList.remove('scrolled-up');
        el_autohide.classList.add('scrolled-down');
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }

  // Show/Hide Search Dropdown JS
  for (let s = 0; s < searchtab.length; s++) {
    searchtab[s].addEventListener('click', function () {
      searchtab[s].classList.toggle('searchshow');
      searchtabdiv[0].classList.toggle('searchdivshow');
      // On mobile, hide an open search box if user scrolls
      if (mediaQuerymax1200.matches) {
        closemobilenav[s].classList.remove('show');
        closemobilenavtoggle[s].classList.add('collapsed');
        $(window).scroll(function () {
          if ($(searchtab[s]).hasClass('searchshow')) {
            $(searchtab[s]).removeClass('searchshow');
            $(searchtabdiv[0]).removeClass('searchdivshow');
          }
        });
      }
      if (mediaQuery1200.matches) {
        opennavbar[0].classList.toggle('opensearch');
      }
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
});
