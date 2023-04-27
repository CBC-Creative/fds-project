menu = $('.heritage-nav-section');
headerheightnav = $('.heritage-nav-section').innerHeight();
origOffsetY = menu.offset().top;

$(window).scroll(function () {
  if ($(window).scrollTop() > origOffsetY) {
    menu.addClass('fixed-top');
    $('body').css('marginTop', headerheightnav);
  } else {
    menu.removeClass('fixed-top');
    $('body').css('marginTop', '0px');
  }
});

function checkElementLocation() {
  var $window = $(window);
  var bottom_of_window = $window.scrollTop() + $window.height();

  $('.section-content').each(function (i) {
    var $that = $(this);
    var bottom_of_object = $that.position().top + $that.outerHeight() / 5;
    var bottom_of_object1 = $that.position().top + $that.outerHeight() * 1.4;

    //if element is in viewport, add the animate class
    if (bottom_of_window > bottom_of_object && bottom_of_window < bottom_of_object1) {
      $(this).addClass('fadeIn');
      // var findid = $(this).attr('id');
      // $('.heritage-nav a').removeClass('active');
      // $('.heritage-nav a[href="#'+findid+'"]').addClass('active');
    } else {
      $(this).removeClass('fadeIn');
    }
  });
}
// if in viewport, show the animation
checkElementLocation();

$(window).on('scroll', function () {
  checkElementLocation();
});

$('.heritage-nav-section a').click(function () {
  $('.heritage-nav-section a').removeClass('active');
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
});
