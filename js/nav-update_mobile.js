$(window).on('load', function () {
  // Custom Mobile Navigation JS Begin
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

  // Loop through all Tier 1 Nav items
  for (var i = 0; i < navContainers.length; i++) {
    // Get each Dropdown Instance, dispose of the old instance, and Reinitialize it
    $(navContainers[i]).dropdown();

    // Whenever you click on a Tier 1 Nav Item on Mobile, Open its Subnav menu
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

  // Custom Mobile Navigation JS End
});
