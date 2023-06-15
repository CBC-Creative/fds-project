$('.mobile-aqm-faq-dropdown').click(function() {
    $('.mobile-none').toggleClass('d-block');
});
$('.list-none a').click(function() {
    $('.mobile-none').removeClass('d-block');
});

    if( $(window).width() <=992 ) {
        var bodyheightcss = $('.sticy-box-aqm-detail-page').height() + 50;
        menu = $('.sticy-box-aqm-detail-page');origOffsetY = menu.offset().top;$(window).scroll(function() { 
            if ($(window).scrollTop() >= origOffsetY) {
                menu.addClass('fixed-top');
                $('.navbar').addClass('d-none');
                $('body').css('padding-top', bodyheightcss);
            } else { 
                    menu.removeClass('fixed-top');$('.navbar').removeClass('d-none');$('body').css('padding-top', 0);}});}