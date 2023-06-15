$('.mobile-aqm-faq-dropdown').click(function() {
    $('.mobile-none').toggleClass('d-block');
});
$('.list-none a').click(function() {
    $('.mobile-none').removeClass('d-block');
});

    if( $(window).width() <=992 ) {
        menu = $('.sticy-box-aqm-detail-page');origOffsetY = menu.offset().top;$(window).scroll(function() { 
            if ($(window).scrollTop() >= origOffsetY) {
                menu.addClass('fixed-top');
                $('.navbar').addClass('d-none');
            } else { 
                    menu.removeClass('fixed-top');$('.navbar').removeClass('d-none');}});}