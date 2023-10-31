$(document).ready(function () {
  const cartTrigger = document.querySelector('#fpp-cart-trigger');
  const cartTriggerLink = document.querySelector('#fpp-cart-trigger a');
  const cartDropdown = document.querySelector('.cart-dropdown-div');
  const cartClose = document.querySelector('.cart-header-close-btn');

  let openCart = function () {
    $(cartTrigger).addClass('openned');
    $(cartDropdown).addClass('show');
    $(cartTriggerLink).attr('aria-expanded', 'true');
  };

  let closeCart = function () {
    $(cartTrigger).removeClass('openned');
    $(cartDropdown).removeClass('show');
    $(cartTriggerLink).attr('aria-expanded', 'false');
  };

  $(cartTrigger).click(function (event) {
    openCart();
    event.stopPropagation();
  });

  $(cartClose).click(function (event) {
    closeCart();
    event.stopPropagation();
  });

  $('body').click(function (event) {
    if (event.target !== cartDropdown && !cartDropdown.contains(event.target)) {
      closeCart();
    }
  });
});
