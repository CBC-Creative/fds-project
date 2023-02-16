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

var searchfilter = $('.desktop-search-filter-to-get-html').html();
$('.mobile-search-filters').append(searchfilter);

var filterleft = $('.desktop-filters-to-get-html').html();
$('.mobile-filters').append(filterleft);
