// Setup Media Queries
const mq768 = window.matchMedia('(min-width: 768px)');

$('a.review-link-to').on('click', function (e) {
  $('.product-details-tabination .active').removeClass('active');
  $('.tab-content .active').removeClass('active');
  $('#product-reviews-tab').addClass('active');
  $('#product-reviews').addClass('active show');

  $('html, body').animate(
    {
      scrollTop: $('#product-reviews-tab').offset().top,
    },
    500
  );
});

$('.product-size-btn').click(function () {
  //alert(this)
  $('.product-size-btn').removeClass('active');
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
});
$('.colors-selected .btn-floating').click(function () {
  //alert(this)
  $('.colors-selected .btn-floating').removeClass('selected-color');
  if ($(this).hasClass('selected-color')) {
    $(this).removeClass('selected-color');
  } else {
    $(this).addClass('selected-color');
  }
});

$(window).on('load', function () {
  $('.ecommerce-gallery .multi-carousel').carousel({
    interval: 2500,
  });
  console.log('window is loaded');
});
