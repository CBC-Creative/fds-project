const heroShot = {
  thumbUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-thumb-main.png',
  slideUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-slide-main.png',
  heroAlt: 'Image of a Shredder',
};

const additionalImages = [
  {
    thumbUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-thumb-turned.png',
    slideUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-slide-turned.png',
    heroAlt: 'Image of a Shredder',
  },
  {
    thumbUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-thumb-demo.png',
    slideUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-slide-demo.png',
    heroAlt: 'Image of a Shredder',
  },
  {
    thumbUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-thumb-shredder-top.png',
    slideUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-slide-shredder-top.png',
    heroAlt: 'Image of a Shredder',
  },
  {
    thumbUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-thumb-lx-cutting.png',
    slideUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-slide-lx-cutting.png',
    heroAlt: 'Image of a Shredder',
  },
  {
    thumbUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-thumb-hand.png',
    slideUrl: 'https://fellowes.cbcwebhosting.com/img/pdp-imgs/gallery-slide-hand.png',
    heroAlt: 'Image of a Shredder',
  },
];

$(window).on('load', function () {
  $('#pdp-multi-carousel').carousel('pause').removeData();

  const myLightBox = document.querySelector('#pdp-lightbox');
  const instance = mdb.Lightbox.getInstance(myLightBox);
  console.log(instance);
  instance.dispose();
  console.log(instance);

  var pdp_multi_carousel_inner = '';
  var pdp_lightbox_inner = '';

  if (heroShot.thumbUrl != '') {
    pdp_multi_carousel_inner +=
      '<div class="multi-carousel-item mb-md-2"><img rel="gal" class="w-100" src="' +
      heroShot.thumbUrl +
      '" data-mdb-img="' +
      heroShot.slideUrl +
      '" alt ="' +
      heroShot.heroAlt +
      '" /></div>';

    pdp_lightbox_inner +=
      '<img rel="gal-box" class="ecommerce-gallery-main-img active w-100" src="' +
      heroShot.slideUrl +
      '" alt="' +
      heroShot.heroAlt +
      '" />';
  }

  if (additionalImages.length != 0) {
    $.each(additionalImages, function (index, additionalImage) {
      if (additionalImage.thumbUrl != '') {
        pdp_multi_carousel_inner +=
          '<div class="multi-carousel-item mb-2"><img rel="gal" class="w-100" src="' +
          additionalImage.thumbUrl +
          '" data-mdb-img="' +
          additionalImage.slideUrl +
          '" alt="' +
          additionalImage.heroAlt +
          '" /></div>';
      }
      if (additionalImage.slideUrl != '') {
        pdp_lightbox_inner +=
          '<img rel="gal-box" class="ecommerce-gallery-main-img w-100" src="' +
          additionalImage.slideUrl +
          '" alt="' +
          additionalImage.heroAlt +
          '" />';
      }
    });
  }

  $('#pdp-multi-carousel-inner').html(pdp_multi_carousel_inner);
  $('#pdp-lightbox').html(pdp_lightbox_inner);

  $('#pdp-multi-carousel-inner .multi-carousel-item').first().addClass('active');
  $('#pdp-multi-carousel-inner img').first().addClass('active');

  $('#pdp-multi-carousel').carousel();
  const newLightbox = mdb.Lightbox.getOrCreateInstance(myLightBox);
  console.log(newLightbox);
  $('.carousel-control-next').click();
});
