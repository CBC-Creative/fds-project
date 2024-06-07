$(window).on('load', function () {
  // Setting up custom media queries
  const mediaQuerymax1200 = window.matchMedia('(max-width: 1199.98px)');

  if (mediaQuerymax1200.matches) {
    // Custom Mobile Navigation JS Begin

    // Custom Variables Setup
    var navbarCollapse = document.querySelector('#navbarSupportedContent');
    var closenav = document.querySelectorAll('.navbar .navbar-toggler');
    var dropdownitem = document.querySelectorAll('.navbar .dropdown-item');
    var subDropdownItem = document.querySelectorAll('.navbar .sub-dropdown-item');

    var t1NavContainers = document.querySelectorAll('.navbar .nav-link.main-dropdown-toggle');
    var t1Navlink = document.querySelectorAll('.navbar-nav .nav-item');
    var t1DropdownMenu = document.querySelectorAll('.navbar .dropdown-menu');

    var subnav = document.querySelectorAll('.navbar .sub-dropdown');
    var subnavmenu = document.querySelectorAll('.navbar .sub-dropdown-menu');
    var subsubnav = document.querySelectorAll('.navbar .sub-sub-dropdown');

    var t1RemoveActive = document.querySelectorAll('.navbar .t1-back-btn');
    var t2RemoveActive = document.querySelectorAll('.navbar .t2-back-btn');
    var t3RemoveActive = document.querySelectorAll('.navbar .t3-back-btn');

    // Loop through all Tier 1 Nav items
    for (var i = 0; i < t1NavContainers.length; i++) {
      // Whenever you click on a Tier 1 Nav Item on Mobile, Open its Subnav menu
      t1NavContainers[i].addEventListener('click', function (e) {
        console.log('T1 link clicked');
        e.preventDefault();
        this.setAttribute('aria-expanded', 'true');
        this.parentElement.querySelector('.dropdown-menu').classList.add('show');

        for (var ij = 0; ij < t1Navlink.length; ij++) {
          t1Navlink[ij].classList.add('active');
        }
      });

      // When clicking on a tier 2 nav item that has a subnav, this prevents the link from activating and shows the submenu instead
      for (let lsnk = 0; lsnk < subnav.length; lsnk++) {
        subnav[lsnk].addEventListener('click', function (e) {
          console.log('T2 link clicked');
          e.preventDefault();
          this.classList.add('active');
          this.setAttribute('aria-expanded', 'true');
          this.parentElement.querySelector('.sub-dropdown-menu').classList.add('showsub');
        });
      }

      // When clicking on a tier 3 nav item that has a subnav, this prevents the link from activating and shows the submenu instead
      for (let lssnk = 0; lssnk < subsubnav.length; lssnk++) {
        subsubnav[lssnk].addEventListener('click', function (e) {
          console.log('T3 link clicked');
          e.preventDefault();
          this.classList.add('active');
          this.setAttribute('aria-expanded', 'true');
          this.parentElement.querySelector('.sub-sub-dropdown-menu').classList.add('showsubsub');
        });
      }

      // Whenever you click on the "Back" link in each Tier 1 Subnav, close the subnav menu
      for (var n = 0; n < t1RemoveActive.length; n++) {
        t1RemoveActive[n].addEventListener('click', function () {
          $(t1NavContainers).attr('aria-expanded', 'false');
          for (var ik = 0; ik < t1Navlink.length; ik++) {
            t1Navlink[ik].classList.remove('active');
            t1DropdownMenu[ik].classList.remove('show');
          }
        });
      }
    }

    // Whenever you click on the "Back" link in each Tier 2 Subnav, close the subnav menu
    for (var nsn = 0; nsn < t2RemoveActive.length; nsn++) {
      t2RemoveActive[nsn].addEventListener('click', function () {
        $(subnav).removeClass('active').attr('aria-expanded', 'false');
        this.parentElement.classList.remove('showsub');
        $(this).parent().parent().parent().addClass('show');
      });
    }

    // Whenever you click on the "Back" link in each Tier 3 Subnav, close the subnav menu
    for (var nsn = 0; nsn < t3RemoveActive.length; nsn++) {
      t3RemoveActive[nsn].addEventListener('click', function () {
        $(subsubnav).removeClass('active').attr('aria-expanded', 'false');
        this.parentElement.classList.remove('showsubsub');
      });
    }

    // Hides an open mobile nav on scroll
    $(window).scroll(function () {
      if ($(navbarCollapse).hasClass('show')) {
        $(t1Navlink).removeClass('active');
        $(t1NavContainers).attr('aria-expanded', 'false');
        $(t1DropdownMenu).removeClass('show');
        $(subnav).removeClass('active').attr('aria-expanded', 'false');
        $(subnavmenu).removeClass('showsub');
        $(navbarCollapse).addClass('mobile-navbar-collapse-onscroll');

        setTimeout(function () {
          $(navbarCollapse).removeClass('show');
          $(navbarCollapse).removeClass('mobile-navbar-collapse-onscroll');
        }, 300);
      }
    });

    // This closes any open subnav if you close the mobile menu with the hamburger menu
    $(closenav).on('click', () => {
      $(t1Navlink).removeClass('active');
      $(t1NavContainers).attr('aria-expanded', 'false');
      $(t1DropdownMenu).removeClass('show');
      $(subnav).removeClass('active').attr('aria-expanded', 'false');
      $(subnavmenu).removeClass('showsub');
    });
  }
  // Custom Mobile Navigation JS End
});
