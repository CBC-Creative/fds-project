$('.hide-password').hide();
$('.show-password').click(function () {
    $('.sign-in-pwd').attr('type', 'text');
    $(this).hide();
    $('.hide-password').show();
})

$('.hide-password').click(function () {
    $('.sign-in-pwd').attr('type', 'password');
    $(this).hide();
    $('.show-password').show();
})

