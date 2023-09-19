const mediaQuerymax1200 = window.matchMedia('(max-width: 1199.98px)');

// Stories section JS

document.addEventListener('DOMContentLoaded', function () {
  if (mediaQuerymax1200.matches) {
    var tabdropdown = document.getElementsByClassName('tab-dropdown');
    var navpills = document.getElementsByClassName('nav-pills');
    var tabboxlinks = document.getElementsByClassName('tabboxlink');
    for (let tbd = 0; tbd < tabdropdown.length; tbd++) {
      tabdropdown[tbd].addEventListener('click', function () {
        navpills[0].classList.toggle('showpills');
      });
    }
    for (let tbl = 0; tbl < tabboxlinks.length; tbl++) {
      tabboxlinks[tbl].addEventListener('click', function () {
        var tabinnerhtml = tabboxlinks[tbl].innerHTML;
        tabdropdown[0].innerHTML = tabinnerhtml;
        navpills[0].classList.remove('showpills');
      });
    }
  }
});
