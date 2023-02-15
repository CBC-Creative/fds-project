$(".filter-btn-mobile").click(function () {
    $('.mobile-filters').toggleClass('show');
});

$('.list-view-unselected').click(function () {
    //alert(this)
    $('.list-view-unselected').removeClass('active');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
});