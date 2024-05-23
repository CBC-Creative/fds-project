$(window).on('load', function () {
  // Setting up custom media queries
  const mediaQuery1200 = window.matchMedia('(min-width: 1200px)');

  if (mediaQuery1200.matches) {
    // Setting up Custom Variables
    const el_autohide = document.querySelector('#main-navbar');

    // Custom Global Navigation JS Begin
    // If at least 1200px or wider, remove MDBootstrap dropdown toggle attribute
    var dropdown = document.querySelectorAll('.navbar .dropdown-toggle');
    for (let v = 0; v < dropdown.length; v++) {
      dropdown[v].removeAttribute('data-mdb-toggle');
    }

    // Show/Hide Nav on Scroll JS
    if (el_autohide) {
      var scroll = $(document).scrollTop();
      var navHeight = $(el_autohide).outerHeight();

      $(window).on('scroll', function () {
        var scrolled = $(document).scrollTop();

        if (scrolled > scroll) {
          $(el_autohide).addClass('scrolled-down');
          $(el_autohide).removeClass('scrolled-up');
        } else {
          $(el_autohide).addClass('scrolled-up');
          $(el_autohide).removeClass('scrolled-down');
        }

        if (scrolled > navHeight) {
          $(el_autohide).addClass('scrolled-down');
          $(el_autohide).removeClass('top-scrolled-up');
        } else {
          $(el_autohide).addClass('top-scrolled-up');
          $(el_autohide).removeClass('scrolled-down scrolled-up');
        }

        scroll = $(document).scrollTop();
      });
    }
  }
});
// Custom Global Navigation JS End
