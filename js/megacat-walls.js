var swatchimgtopreview = ''; 
var x = '';
var y = '';
$(document).on('click','.swatch-right-boxes-main-row .swatch-right-boxes', function (e) {
    e.preventDefault();
    x = $(this).parent().find(".swatch-small-title-right").attr("data-category");
    y = $(this).parent().find(".swatch-small-title-right").attr("data-name");
    $(this).parents(".accordion-body").find('.swatch-left-preview-box .swatch-title span[data-name]').attr('data-name', y)
    $(this).parents(".accordion-body").find('.swatch-left-preview-box .swatch-title span[data-name]').text(y)
    $(this).parents(".accordion-body").find('.swatch-left-preview-box .swatch-title span[data-category]').attr('data-category', x)
    $(this).parents(".accordion-body").find('.swatch-left-preview-box .swatch-title span[data-category]').text(x)
    swatchimgtopreview = $(this).parent().find('.swatch-img img').attr('src');
    $(this).parents(".accordion-body").find('.swatch-preview-img img').attr('src', swatchimgtopreview);
});

$( document ).ready(function() {
  $('.swatch-right-boxes-main-row .col-lg-2:first-child .swatch-right-boxes').trigger( "click" );
});

$(document).ready(function(){
  var multiideaslider = $('.multi-carousel-inner').children();
 
 var multiideaslidercontent = $('.idea-right-content-main').children();

  for (let index = 0; index < multiideaslidercontent.length; index++) {
    multiideaslidercontent[index].setAttribute('data-content-idea-id', index);
  }

  for (let index1 = 0; index1 < multiideaslider.length; index1++) {
    multiideaslider[index1].setAttribute('data-idea-id', index1);
  }

  $(document).on("click",".multi-carousel-item",function(e){
    e.preventDefault();
    $('.idea-right-content').removeClass('show-item');
    $('.multi-carousel-item').removeClass('selected');
    var imagetoset = multiideaslider[$(this).attr("data-idea-id")];
    $(imagetoset).addClass('selected');
    var image_tag = $(imagetoset).children();
    var imagepathtoset = $(image_tag).attr('src');
    $('.idea-starters-preview-img').attr('src', imagepathtoset);
    var showitem = multiideaslidercontent[$(this).attr("data-idea-id")];
    $(showitem).addClass('show-item');
  });  
  
});



var currentSlide = "";
var slidewidth = "";
$(document).on("click", ".custom-control-arrows .next-arrow", function (e) {
    e.preventDefault();
    currentSlide = $("body").find(".custom-slider .custom-slide.active"); 
    currentSlide.next().addClass("active");
    currentSlide.removeClass("active");
    slidewidth = currentSlide.width() + 10;    
    currentSlide.css('margin-left', "-" + slidewidth + "px");
    $(".custom-control-arrows .prev-arrow").removeClass("disabled");
    if ($("body").find(".custom-slider .custom-slide:last-child").hasClass("active")) {
        $(".custom-control-arrows .next-arrow").addClass("disabled");
        $(".custom-control-arrows .prev-arrow").removeClass("disabled");
    }else{
        $(".custom-control-arrows .next-arrow").removeClass("disabled");
    }
});


$(document).on("click", '.custom-control-arrows .prev-arrow', function (e) {
    e.preventDefault();
    currentSlide = $("body").find(".custom-slider .custom-slide.active");
    currentSlide.prev().addClass("active");
    slidewidth = currentSlide.width();
    currentSlide.prev().css('margin-left', 0);
    currentSlide.removeClass("active");
    $(".custom-control-arrows .next-arrow").removeClass("disabled");
    if ($("body").find(".custom-slider .custom-slide:first-child").hasClass("active")) {
      $(".custom-control-arrows .prev-arrow").addClass("disabled");
      $(".custom-control-arrows .next-arrow").removeClass("disabled");
    }else{
      $(".custom-control-arrows .prev-arrow").removeClass("disabled");
    }    
});


const mediamax991 = window.matchMedia('(max-width: 991.99px)');
var imagedivtocopy = $('.desktop-html-to-copy').html();
$('.mobile-image-append').append(imagedivtocopy);
document.addEventListener('DOMContentLoaded', function () {
  if (mediamax991.matches) {
    const titanCatBlock = document.querySelector('.titanvategorybg');
    const voloCatBlock = document.querySelector('.volovategorybg');
    const trendCatBlock = document.querySelector('.trendwallvategorybg');
    const titan_showOnMobile = document.querySelector('.titan_showOnMobile');
    const volo_showOnMobile = document.querySelector('.volo_showOnMobile');
    const trend_showOnMobile = document.querySelector('.trend_showOnMobile');

    titan_showOnMobile.classList.add('show');

    titanCatBlock.addEventListener('click', function () {
      document.querySelector('.showOnMobile.show').classList.remove('show');
      titan_showOnMobile.classList.add('show');
    });

    voloCatBlock.addEventListener('click', function () {
      document.querySelector('.showOnMobile.show').classList.remove('show');
      volo_showOnMobile.classList.add('show');
    });

    trendCatBlock.addEventListener('click', function () {
      document.querySelector('.showOnMobile.show').classList.remove('show');
      trend_showOnMobile.classList.add('show');
    });
  }
});
function equalHeight() {
  if ($("body").find("#primary-content").hasClass("wall-slider-caption")) {
    var wallcaption = Array.from(document.getElementsByClassName('wall-slider-caption'));
    for (let w = 0; w < wallcaption.length; w++) {
      var setheightcaption = Math.max(wallcaption[0].scrollHeight);
      wallcaption[w].style.height = setheightcaption + 'px';
    }
  }
  
  if ($("body").find("#primary-content").hasClass("wallsliderindicators")) {
    var wallindicators = document.getElementsByClassName('wallsliderindicators');
    wallindicators[0].style.bottom = setheightcaption - 58 + 'px';
  }  
}
equalHeight();
