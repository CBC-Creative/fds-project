$(document).ready(function () {
  $('.designCenterSlider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    infinite: true,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '10%',
    prevArrow:
      '<button class="slick-slider-arrow slick-slider-prev" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slick-slider-arrow slick-slider-next" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-right"></i></button>',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '10%',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '10%',
          slidesToShow: 1,
        },
      },
    ],
  });
});
