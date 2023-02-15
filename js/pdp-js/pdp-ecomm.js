
$('.product-image-list img').click(function () {
    var selectedPath = $(this).attr("src");

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