// Setting up custom media queries
const mediaQuery1200 = window.matchMedia('(min-width: 1200px)');
const mediaQuerymax1200 = window.matchMedia('(max-width: 1199.98px)');
const mediaQuery992 = window.matchMedia('(min-width: 992px)');
const mediaQueryMax992 = window.matchMedia('(max-width: 992px)');

// Custom Global Navication JS
const el_autohide = document.querySelector('#main-navbar');
const searchInput = document.querySelector('#nav-search-field-2');
const intelSearchResults = document.querySelector('.intel-search-results');

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

document.addEventListener('DOMContentLoaded', function () {
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
});

document.addEventListener('DOMContentLoaded', function () {
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
}); // DOMContentLoaded  end

document.addEventListener('DOMContentLoaded', function () {
  var searchtab = document.getElementsByClassName('search-dropdown');
  var searchtabdiv = document.getElementsByClassName('search-div');
  var closemobilenav = document.getElementsByClassName('navbar-collapse');
  var closemobilenavtoggle = document.getElementsByClassName('navbar-toggler');
  var opennavbar = document.getElementsByClassName('navbar');

  for (let s = 0; s < searchtab.length; s++) {
    searchtab[s].addEventListener('click', function () {
      searchtab[s].classList.toggle('searchshow');
      searchtabdiv[0].classList.toggle('searchdivshow');
      if (mediaQuerymax1200.matches) {
        closemobilenav[s].classList.remove('show');
        closemobilenavtoggle[s].classList.add('collapsed');
      }
      if (mediaQuery1200.matches) {
        opennavbar[0].classList.toggle('opensearch');
      }
    });
  }
  if (mediaQuery1200.matches) {
    var dropdown = document.getElementsByClassName('dropdown-toggle');
    for (let v = 0; v < dropdown.length; v++) {
      dropdown[v].removeAttribute('data-mdb-toggle');
    }
  }
  if (mediaQuerymax1200.matches) {
    var navContainers = document.getElementsByClassName('dropdown-toggle');
    var removenavactive = document.getElementsByClassName('mobile-back-btn');
    var navlink = document.getElementsByClassName('nav-item');
    var closenav = document.getElementsByClassName('navbar-toggler');
    var subnav = document.getElementsByClassName('sub-dropdown');
    var subnavmenu = document.getElementsByClassName('sub-dropdown-menu');
    var dropdownitem = document.getElementsByClassName('dropdown-item');

    for (var i = 0; i < navContainers.length; i++) {
      navContainers[i].addEventListener('click', function () {
        for (var ij = 0; ij < navlink.length; ij++) {
          navlink[ij].classList.add('active');
        }
      });
    }
    for (var n = 0; n < removenavactive.length; n++) {
      removenavactive[n].addEventListener('click', function () {
        for (var ij = 0; ij < navlink.length; ij++) {
          navlink[ij].classList.remove('active');
        }
      });
    }
    for (var k = 0; k < closenav.length; k++) {
      closenav[k].addEventListener('click', function () {
        for (var ij = 0; ij < navlink.length; ij++) {
          navlink[ij].classList.remove('active');
        }
      });
    }
    /* please remove this after adding link on page */
    for (var a = 0; a < dropdownitem.length; a++) {
      dropdownitem[a].addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
    /* please remove this after adding link on page */
    for (let l = 0; l < subnav.length; l++) {
      subnav[l].addEventListener('click', function (e) {
        e.stopPropagation();
        subnavmenu[l].classList.toggle('showsub');
        subnav[l].classList.toggle('open');
      });
    }
  }
});
// Custom Global Navication JS end

// Custom Footer JS
document.addEventListener('DOMContentLoaded', function () {
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
}); // DOMContentLoaded  end
// Custom Footer JS end

var footerCopyRight = document.getElementById('copyright-year');

if (footerCopyRight) {
  var date = new Date();
  var year = date.getFullYear();

  footerCopyRight.innerHTML = year;
}
