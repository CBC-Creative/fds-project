$('.filter-btn-mobile').click(function () {
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

$('.slider-icons').click(function () {
  var dataName = $(this).attr('data-name');
  sessionStorage.setItem('data-name', dataName);
  window.location.href = 'downloads-icon-view.html';
});

$(function () {
  window.myvar = '';
  var getName = sessionStorage.getItem('data-name');
  var checkcheck;
  $('.slider-icons-list').each(function (index) {
    var x = index + 1;
    $(this).addClass('item' + x);
    $(this).attr('data-item-num', index);

    var ListIconAttrValue = $(this).attr('data-name');

    if (ListIconAttrValue == getName) {
      $(this).addClass('active');

      if ($(this).attr('data-item-num') > 6) {
        checkcheck = 1;
      } else {
        checkcheck = 0;
      }
      var activeClass = $(this).attr('class').split(' ');
      var activeItemClass = activeClass[2];
      window.myvar = activeItemClass;
      window.k = $(this);
    }
  });

  if ($(window).width() >= 993) {
    if (checkcheck == 1) {
      $('.' + window.myvar).insertAfter('.slider-icons-list:nth-child(7)');
    } else {
      $('.' + window.myvar).insertAfter('.slider-icons-list:nth-child(8)');
    }
  } else if ($(window).width() >= 521 && $(window).width() <= 992) {
    if (checkcheck == 1) {
      $('.' + window.myvar).insertAfter('.slider-icons-list:nth-child(3)');
    } else {
      $('.' + window.myvar).insertAfter('.slider-icons-list:nth-child(4)');
    }
  } else if ($(window).width() >= 461 && $(window).width() <= 520) {
    if (checkcheck == 1) {
      $('.' + window.myvar).insertAfter('.slider-icons-list:nth-child(2)');
    } else {
      $('.' + window.myvar).insertAfter('.slider-icons-list:nth-child(3)');
    }
  } else {
    if (checkcheck == 1) {
      $('.' + window.myvar).insertAfter('.slider-icons-list:nth-child(2)');
    } else {
      $('.' + window.myvar).insertAfter('.slider-icons-list:nth-child(2)');
    }
  }
});

$('.clear-btn').click(function () {
  $('.download-accordion')
    .find('.form-check-input')
    .each(function (index) {
      if ($(this).is(':checked')) {
        $(this).prop('checked', false);
      }
    });
});

/* util.js */
// Utility function
function Util() {}

/* 
	class manipulation functions
*/
Util.hasClass = function (el, className) {
  if (el.classList) return el.classList.contains(className);
  else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Util.addClass = function (el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.add(classList[0]);
  else if (!Util.hasClass(el, classList[0])) el.className += ' ' + classList[0];
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function (el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.remove(classList[0]);
  else if (Util.hasClass(el, classList[0])) {
    var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function (el, className, bool) {
  if (bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};

Util.setAttributes = function (el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

/* 
  DOM manipulation
*/
Util.getChildrenByClassName = function (el, className) {
  var children = el.children,
    childrenByClass = [];
  for (var i = 0; i < el.children.length; i++) {
    if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
  }
  return childrenByClass;
};

/* 
	Animate height of an element
*/
Util.setHeight = function (start, to, element, duration, cb) {
  var change = to - start,
    currentTime = null;

  var animateHeight = function (timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    var val = parseInt((progress / duration) * change + start);
    element.setAttribute('style', 'height:' + val + 'px;');
    if (progress < duration) {
      window.requestAnimationFrame(animateHeight);
    } else {
      cb();
    }
  };

  //set the height of the element before starting animation -> fix bug on Safari
  element.setAttribute('style', 'height:' + start + 'px;');
  window.requestAnimationFrame(animateHeight);
};

/* 
	Smooth Scroll
*/

Util.scrollTo = function (final, duration, cb) {
  var start = window.scrollY || document.documentElement.scrollTop,
    currentTime = null;

  var animateScroll = function (timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    if (progress > duration) progress = duration;
    var val = Math.easeInOutQuad(progress, start, final - start, duration);
    window.scrollTo(0, val);
    if (progress < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      cb && cb();
    }
  };

  window.requestAnimationFrame(animateScroll);
};

/* 
  Focus utility classes
*/

//Move focus to an element
Util.moveFocus = function (element) {
  if (!element) element = document.getElementsByTagName('body')[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute('tabindex', '-1');
    element.focus();
  }
};

/* 
  Misc
*/

Util.getIndexInArray = function (array, el) {
  return Array.prototype.indexOf.call(array, el);
};

Util.cssSupports = function (property, value) {
  if ('CSS' in window) {
    return CSS.supports(property, value);
  } else {
    var jsProperty = property.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    return jsProperty in document.body.style;
  }
};

/* 
	Polyfills
*/
//Closest() method
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

//Custom Event() constructor
if (typeof window.CustomEvent !== 'function') {
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

/* 
	Animation curves
*/
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

/* Download Main.js */
(function () {
  // Add to Cart Interaction - by CodyHouse.co
  var cart = document.getElementsByClassName('js-cd-cart');
  if (cart.length > 0) {
    var cartAddBtns = document.getElementsByClassName('js-cd-add-to-cart'),
      cartBody = cart[0].getElementsByClassName('cd-cart__body')[0],
      cartList = cartBody.getElementsByTagName('ul')[0],
      cartListItems = cartList.getElementsByClassName('cd-cart__product'),
      cartTotal = cart[0]
        .getElementsByClassName('cd-cart__checkout')[0]
        .getElementsByTagName('span')[0],
      cartTotalitem = cart[0]
        .getElementsByClassName('cd-cart__checkout')[0]
        .getElementsByTagName('i')[0],
      cartCount = cart[0].getElementsByClassName('cd-cart__count')[0],
      cartCountItems = cartCount.getElementsByTagName('li'),
      cartUndo = cart[0].getElementsByClassName('cd-cart__undo')[0],
      productId = 0, //this is a placeholder -> use your real product ids instead
      productName = '',
      productSize = '',
      cartTimeoutId = false,
      animatingQuantity = false;
    initCartEvents();

    function initCartEvents() {
      // add products to cart
      for (var i = 0; i < cartAddBtns.length; i++) {
        (function (i) {
          cartAddBtns[i].addEventListener('click', addToCart);
          cartAddBtns[i].addEventListener('click', function () {
            $(this).parents('.download-box').addClass('itemselected');
            $(this).addClass('selected');
          });
        })(i);
      }

      // open/close cart
      cart[0]
        .getElementsByClassName('cd-cart__trigger')[0]
        .addEventListener('click', function (event) {
          event.preventDefault();
          toggleCart();
        });

      cart[0].addEventListener('click', function (event) {
        if (event.target == cart[0]) {
          // close cart when clicking on bg layer
          toggleCart(true);
        } else if (event.target.closest('.cd-cart__delete-item')) {
          // remove product from cart
          event.preventDefault();
          var removeselectedmain = event.target.closest('.cd-cart__details').firstChild;
          var removeselected = $(removeselectedmain).text();
          var itemstoremoveclass = $('body').find('.download-box').find('.product-name');

          if ($('body').find('.pdp-products-list').hasClass('icon-view-listing')) {
            for (let w = 0; w < itemstoremoveclass.length; w++) {
              if ($(itemstoremoveclass[w]).text() == removeselected) {
                var filtereditems = $(
                  itemstoremoveclass[w].parentNode.parentNode.parentNode.parentNode.offsetParent
                );
                for (let fi = 0; fi < filtereditems.length; fi++) {
                  if (filtereditems[fi].classList.contains('itemselected')) {
                    filtereditems[fi].classList.remove('itemselected');
                  }
                }
              }
            }
          }
          if ($('body').find('.listing-table').hasClass('download-list-table')) {
            for (let w = 0; w < itemstoremoveclass.length; w++) {
              if ($(itemstoremoveclass[w]).text() == removeselected) {
                var filtereditems = $(
                  itemstoremoveclass[w].parentNode.parentNode.parentNode.offsetParent
                );
                for (let fi = 0; fi < filtereditems.length; fi++) {
                  if (filtereditems[fi].classList.contains('itemselected')) {
                    filtereditems[fi].classList.remove('itemselected');
                  }
                }
              }
            }
          }

          removeProduct(event.target.closest('.cd-cart__product'));
        }
      });

      // update product quantity inside cart
      cart[0].addEventListener('change', function (event) {
        if (event.target.tagName.toLowerCase() == 'select') quickUpdateCart();
      });

      //reinsert product deleted from the cart
      cartUndo.addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() == 'a') {
          event.preventDefault();
          if (cartTimeoutId) clearInterval(cartTimeoutId);
          // reinsert deleted product
          var deletedProduct = cartList.getElementsByClassName('cd-cart__product--deleted')[0];
          Util.addClass(deletedProduct, 'cd-cart__product--undo');
          deletedProduct.addEventListener('animationend', function cb() {
            deletedProduct.removeEventListener('animationend', cb);
            Util.removeClass(deletedProduct, 'cd-cart__product--deleted cd-cart__product--undo');
            deletedProduct.removeAttribute('style');
            quickUpdateCart();
          });
          Util.removeClass(cartUndo, 'cd-cart__undo--visible');
        }
      });
    }

    function addToCart(event) {
      event.preventDefault();
      if (animatingQuantity) return;
      var cartIsEmpty = Util.hasClass(cart[0], 'cd-cart--empty');
      productName = $(this).parents('.download-box').find('.product-name').text();
      productSize = $(this).parents('.download-box').find('.product-size').text();
      //update cart product list
      addProduct(this);
      //update number of items
      updateCartCount(cartIsEmpty);
      //update total price
      updateCartTotal($(this).parents('.download-box').find('.product-size span').text(), true);
      //show cart
      Util.removeClass(cart[0], 'cd-cart--empty');
    }

    function toggleCart(bool) {
      // toggle cart visibility
      var cartIsOpen = typeof bool === 'undefined' ? Util.hasClass(cart[0], 'cd-cart--open') : bool;

      if (cartIsOpen) {
        Util.removeClass(cart[0], 'cd-cart--open');
        //reset undo
        if (cartTimeoutId) clearInterval(cartTimeoutId);
        Util.removeClass(cartUndo, 'cd-cart__undo--visible');
        removePreviousProduct(); // if a product was deleted, remove it definitively from the cart

        setTimeout(function () {
          cartBody.scrollTop = 0;
          //check if cart empty to hide it
          if (Number(cartCountItems[0].innerText) == 0) Util.addClass(cart[0], 'cd-cart--empty');
        }, 500);
      } else {
        Util.addClass(cart[0], 'cd-cart--open');
      }
    }

    function addProduct(target) {
      // this is just a product placeholder
      // you should insert an item with the selected product info
      // replace productId, productName, price and url with your real product info
      // you should also check if the product was already in the cart -> if it is, just update the quantity
      productId = productId + 1;
      var productAdded =
        '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#0"><img src="img/product-preview.png" class="img-fluid" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate">' +
        productName +
        '</h3><span class="cd-cart__price">' +
        productSize +
        '</span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item"><img src="/img/cd-icons-close.svg" /></a><div class="cd-cart__quantity"><span class="cd-cart__select"><select class="reset" id="cd-product-' +
        productId +
        '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>';
      cartList.insertAdjacentHTML('beforeend', productAdded);
    }

    function removeProduct(product) {
      if (cartTimeoutId) clearInterval(cartTimeoutId);
      removePreviousProduct(); // prduct previously deleted -> definitively remove it from the cart

      var topPosition = product.offsetTop,
        productQuantity = Number(product.getElementsByTagName('select')[0].value),
        productTotPrice =
          Number(product.getElementsByClassName('cd-cart__price')[0].innerText.replace(' MB', '')) *
          productQuantity;
      currentQuantity = cartTotalitem.innerText;
      product.style.top = topPosition + 'px';
      Util.addClass(product, 'cd-cart__product--deleted');

      //update items count + total price
      updateCartTotal(productTotPrice, false);
      updateCartCount(true, -productQuantity);
      Util.addClass(cartUndo, 'cd-cart__undo--visible');
      cartTotalitem.innerText = currentQuantity - productQuantity;

      //wait 8sec before completely remove the item
      cartTimeoutId = setTimeout(function () {
        Util.removeClass(cartUndo, 'cd-cart__undo--visible');
        removePreviousProduct();
      }, 8000);
    }

    function removePreviousProduct() {
      // definitively removed a product from the cart (undo not possible anymore)
      var deletedProduct = cartList.getElementsByClassName('cd-cart__product--deleted');
      if (deletedProduct.length > 0) deletedProduct[0].remove();
    }

    function updateCartCount(emptyCart, quantity) {
      if (typeof quantity === 'undefined') {
        var actual = Number(cartCountItems[0].innerText) + 1;
        var next = actual + 1;

        cartTotalitem.innerText = actual;

        if (emptyCart) {
          cartCountItems[0].innerText = actual;
          cartCountItems[1].innerText = next;
          animatingQuantity = false;
        } else {
          Util.addClass(cartCount, 'cd-cart__count--update');

          setTimeout(function () {
            cartCountItems[0].innerText = actual;
          }, 150);

          setTimeout(function () {
            Util.removeClass(cartCount, 'cd-cart__count--update');
          }, 200);

          setTimeout(function () {
            cartCountItems[1].innerText = next;
            animatingQuantity = false;
          }, 230);
        }
      } else {
        var actual = Number(cartCountItems[0].innerText) + quantity;
        var next = actual + 1;

        cartCountItems[0].innerText = actual;
        cartCountItems[1].innerText = next;
        animatingQuantity = false;
      }
    }

    function updateCartTotal(price, bool) {
      cartTotal.innerText = bool
        ? (Number(cartTotal.innerText) + Number(price)).toFixed(2)
        : (Number(cartTotal.innerText) - Number(price)).toFixed(2);
    }

    function quickUpdateCart() {
      var quantity = 0;
      var price = 0;

      for (var i = 0; i < cartListItems.length; i++) {
        if (!Util.hasClass(cartListItems[i], 'cd-cart__product--deleted')) {
          var singleQuantity = Number(cartListItems[i].getElementsByTagName('select')[0].value);
          quantity = quantity + singleQuantity;
          cartTotalitem.innerText = quantity;
          price =
            price +
            singleQuantity *
              Number(
                cartListItems[i]
                  .getElementsByClassName('cd-cart__price')[0]
                  .innerText.replace(' MB', '')
              );
        }
      }

      cartTotal.innerText = price.toFixed(2);
      cartCountItems[0].innerText = quantity;
      cartCountItems[1].innerText = quantity + 1;
    }
  }
})();

if (jQuery(window).width() >= 768) {
  function setHeightsunscribeform() {
    var maxHeight = -1;
    jQuery('.product-name').each(function () {
      maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
    });
    jQuery('.product-name').each(function () {
      jQuery(this).height(maxHeight);
    });
  }

  jQuery(document).ready(function () {
    setHeightsunscribeform();
  });
  jQuery(window).resize(function () {
    setHeightsunscribeform();
  });
}

$(function () {
  $(document).on('click', function (e) {
    var downloadList = $(e.target).parent().siblings('.single-item-download-selector');
    if ($(e.target).hasClass('dl-icon')) {
      $('.single-item-download-selector').not(downloadList).hide();
      $(downloadList).toggle();
    } else if (
      $(e.target).hasClass('single-item-download-selector') ||
      $(e.target).parents().hasClass('single-item-download-selector')
    ) {
      return;
    } else {
      $('.single-item-download-selector').hide();
    }
  });
});

$(function () {
  $(document).on('click', function (e) {
    var fileTypeList = $(e.target).siblings('.list-of-file-type');

    if ($(e.target).hasClass('current-file-type')) {
      $('.list-of-file-type').not(fileTypeList).hide();
      $(fileTypeList).toggle();
    } else if (
      $(e.target).hasClass('list-of-file-type') ||
      $(e.target).parents().hasClass('list-of-file-type')
    ) {
      return;
    } else {
      $('.list-of-file-type').hide();
    }
  });
});

var cartFileSection = document.querySelectorAll('.cd-cart__filetype');

if (cartFileSection) {
  $(cartFileSection).each(function () {
    var currentFileType = $(this).children('.current-file-type');
    var availableFiletypes = $(this)
      .children('.list-of-file-type')
      .children('ul')
      .children('li')
      .children('a');
    $(availableFiletypes).each(function () {
      $(this).on('click', function () {
        var clickedType = $(this).text();
        $(currentFileType).text(clickedType);
        $('.list-of-file-type').hide();
      });
    });
  });
}
