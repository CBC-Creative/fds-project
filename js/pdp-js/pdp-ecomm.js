// Setup Media Queries
const mq768 = window.matchMedia('(min-width: 768px)');

$(document).ready(function () {
  if (mq768.matches) {
    const ecommGallery = document.querySelector('.ecommerce-gallery .multi-carousel');
    $(ecommGallery).addClass('vertical');
  }
});

$('.product-image-list img').click(function () {
  var selectedPath = $(this).attr('src');

  $('.product-banner-image  img').attr('src', selectedPath);
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
