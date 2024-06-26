$(window).on('load', function () {
  var tabdropdown1 = document.getElementsByClassName('tab-dropdown');
  var tabdropdown2 = document.getElementsByClassName('mobile-dropdown-tab');
  var navpills1 = document.getElementsByClassName('aeramax-tabs');
  var tabboxlinks1 = document.getElementsByClassName('tabboxlink');
  for (let tbd = 0; tbd < tabdropdown1.length; tbd++) {
    tabdropdown2[tbd].addEventListener('click', function () {
      navpills1[0].classList.toggle('showpills');
    });
  }
  for (let tbl = 0; tbl < tabboxlinks1.length; tbl++) {
    tabboxlinks1[tbl].addEventListener('click', function () {
      var tabinnerhtml = tabboxlinks1[tbl].innerHTML;
      tabdropdown1[0].innerHTML = tabinnerhtml;
      navpills1[0].classList.remove('showpills');
    });
  }

  var menu = $('.aeramax_technologies');
  var menu1 = $('.ready-where-needed');
  var menu2 = $('.protects-the-air');
  var banner = $('.fellowes-banner-image-zoom');
  if (menu.length) {
    var origOffsetY = menu.offset().top;
  }
  if (menu1.length) {
    var origOffsetY1 = menu1.offset().top;
  }
  if (menu2.length) {
    var origOffsetY2 = menu2.offset().top;
  }
  if (banner.length) {
    var origOffsetY3 = banner.offset().top;
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() >= origOffsetY) {
      menu.addClass('fellowes-slide-scroll-effect');
    } else {
      menu.removeClass('fellowes-slide-scroll-effect');
    }
    if ($(window).scrollTop() >= origOffsetY1) {
      menu1.addClass('fellowes-slide-scroll-effect');
    } else {
      menu1.removeClass('fellowes-slide-scroll-effect');
    }
    if ($(window).scrollTop() >= origOffsetY2) {
      menu2.addClass('fellowes-slide-scroll-effect');
    } else {
      menu2.removeClass('fellowes-slide-scroll-effect');
    }
    if ($(window).scrollTop() > origOffsetY3) {
      banner.addClass('fellowes-slide-scroll-effect');
    } else {
      banner.removeClass('fellowes-slide-scroll-effect');
    }
  });
});
