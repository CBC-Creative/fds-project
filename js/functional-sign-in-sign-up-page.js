$('.hide-password').hide();
$('.show-password').click(function () {
  // console.log(jQuery(this).parent().find('.sign-in-pwd'));
   $(this).parent().find('.sign-in-pwd').attr('type', 'text');
    $(this).hide();
    $(this).parent().find('.hide-password').show();
})

$('.hide-password').click(function () {
    $(this).parent().find('.sign-in-pwd').attr('type', 'password');
    $(this).hide();
    $(this).parent().find('.show-password').show();
})
$('.signup-show').click( function () {
    $('.sign-in-section').hide();
    $('.sign-up-section').show();
})

