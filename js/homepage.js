// Custom Global Navication JS
const el_autohide1 = document.querySelector('#main-navbar');

document.addEventListener('DOMContentLoaded', function () {
  // Check if the media query 1200px is true
  if (mediaQuery1200.matches && el_autohide1) {
    // Run Code
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      if (scroll_top < 10) {
        el_autohide1.classList.add('top-scrolled-up');
      } else {
        el_autohide1.classList.remove('top-scrolled-up');
      }
    });
    // window.addEventListener
  }
}); // DOMContentLoaded  end

// Homepage Logo Section JS

document.addEventListener('DOMContentLoaded', function () {
  var maincarousel = document.getElementsByClassName('homepage-logo-multi');
  var logodivmain = document.getElementsByClassName('logo-content-main');
  for (let one = 0; one < maincarousel.length; one++) {
    var adddynamicclass = maincarousel[one].children;
    adddynamicclass.forEach((element) => {
      element.setAttribute('data-item', 'item' + [one++]);
    });
  }
  for (let logoone = 0; logoone < logodivmain.length; logoone++) {
    var adddynamicclasslogo = logodivmain[logoone].children;
    adddynamicclasslogo.forEach((element) => {
      element.setAttribute('data-content-item', 'item' + [logoone++]);
    });
  }
});

function logofunction() {
  var imageclick = document.getElementsByClassName('slideimageclick');
  for (let imageindex = 0; imageindex < imageclick.length; imageindex++) {
    imageclick[imageindex].addEventListener('click', function () {
      var imageParent = this.parentNode;
      var currentItem = imageParent.parentNode.getAttribute('data-item');
      var removeactive = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
      for (var re = 0; re < removeactive.length; re++) {
        removeactive[re].classList.remove('active');
      }
      imageParent.parentNode.classList.add('active');
      var divsToHide = document.getElementsByClassName('logo-slide'); //divsToHide is an array
      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = 'none'; // depending on what you're doing
      }
      document.querySelector('[data-content-item="' + currentItem + '"]').style.display = 'block';
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  logofunction();
});

const nextprevclick = document.getElementsByClassName('carousel-control');
for (let nepre = 0; nepre < nextprevclick.length; nepre++) {
  nextprevclick[nepre].addEventListener('click', function () {
    logofunction();
  });
}

const mediaMax767 = window.matchMedia('(max-width: 767.98px)');
document.addEventListener('DOMContentLoaded', function () {
  if (mediaMax767.matches) {
    const nextclick = document.getElementsByClassName('carousel-control-next');
    const prevclick = document.getElementsByClassName('carousel-control-prev');

    for (let nex = 0; nex < nextclick.length; nex++) {
      nextclick[nex].addEventListener('click', function () {
        var imageclick1 = document.getElementsByClassName('slideimageclick');
        var imageParent1 = imageclick1[1].parentNode;
        var currentItem1 = imageParent1.parentNode.getAttribute('data-item');
        var removeactive1 = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
        for (var re1 = 0; re1 < removeactive1.length; re1++) {
          removeactive1[re1].classList.remove('active');
        }
        imageParent1.parentNode.classList.add('active');
        var divsToHide1 = document.getElementsByClassName('logo-slide'); //divsToHide is an array
        for (var i = 0; i < divsToHide1.length; i++) {
          divsToHide1[i].style.display = 'none'; // depending on what you're doing
        }
        document.querySelector('[data-content-item="' + currentItem1 + '"]').style.display =
          'block';
      });
    }

    for (let prev = 0; prev < prevclick.length; prev++) {
      prevclick[prev].addEventListener('click', function () {
        var imageclick1 = document.getElementsByClassName('slideimageclick');
        var imageParent1 = imageclick1[0].parentNode;
        var currentItem1 = imageParent1.parentNode.getAttribute('data-item');
        var removeactive1 = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
        for (var re1 = 0; re1 < removeactive1.length; re1++) {
          removeactive1[re1].classList.remove('active');
        }
        imageParent1.parentNode.classList.add('active');
        var divsToHide1 = document.getElementsByClassName('logo-slide'); //divsToHide is an array
        for (var i = 0; i < divsToHide1.length; i++) {
          divsToHide1[i].style.display = 'none'; // depending on what you're doing
        }
        document.querySelector('[data-content-item="' + currentItem1 + '"]').style.display =
          'block';
      });
    }
    document.querySelector('.multi-carousel').addEventListener('swipeleft', function (event) {
      var imageclick1 = document.getElementsByClassName('slideimageclick');
      var imageParent1 = imageclick1[1].parentNode;
      var currentItem1 = imageParent1.parentNode.getAttribute('data-item');
      var removeactive1 = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
      for (var re1 = 0; re1 < removeactive1.length; re1++) {
        removeactive1[re1].classList.remove('active');
      }
      imageParent1.parentNode.classList.add('active');
      var divsToHide1 = document.getElementsByClassName('logo-slide'); //divsToHide is an array
      for (var i = 0; i < divsToHide1.length; i++) {
        divsToHide1[i].style.display = 'none'; // depending on what you're doing
      }
      document.querySelector('[data-content-item="' + currentItem1 + '"]').style.display = 'block';
    });
    document.querySelector('.multi-carousel').addEventListener('swiperight', function (event) {
      var imageclick1 = document.getElementsByClassName('slideimageclick');
      var imageParent1 = imageclick1[0].parentNode;
      var currentItem1 = imageParent1.parentNode.getAttribute('data-item');
      var removeactive1 = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
      for (var re1 = 0; re1 < removeactive1.length; re1++) {
        removeactive1[re1].classList.remove('active');
      }
      imageParent1.parentNode.classList.add('active');
      var divsToHide1 = document.getElementsByClassName('logo-slide'); //divsToHide is an array
      for (var i = 0; i < divsToHide1.length; i++) {
        divsToHide1[i].style.display = 'none'; // depending on what you're doing
      }
      document.querySelector('[data-content-item="' + currentItem1 + '"]').style.display = 'block';
    });
  }
});

// Stories section JS

document.addEventListener('DOMContentLoaded', function () {
  if (mediaQuerymax1200.matches) {
    var tabdropdown = document.getElementsByClassName('tab-dropdown');
    var navpills = document.getElementsByClassName('nav-pills');
    var tabboxlinks = document.getElementsByClassName('tabboxlink');
    for (let tbd = 0; tbd < tabdropdown.length; tbd++) {
      tabdropdown[tbd].addEventListener('click', function () {
        navpills[0].classList.toggle('showpills');
      });
    }
    for (let tbl = 0; tbl < tabboxlinks.length; tbl++) {
      tabboxlinks[tbl].addEventListener('click', function () {
        var tabinnerhtml = tabboxlinks[tbl].innerHTML;
        tabdropdown[0].innerHTML = tabinnerhtml;
        navpills[0].classList.remove('showpills');
      });
    }
  }
});
