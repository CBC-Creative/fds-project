// Custom Global Navication JS
const el_autohide1 = document.querySelector('#main-navbar');

document.addEventListener('DOMContentLoaded', function () {
  // Check if the media query 1200px is true
  if (mediaQuery1200.matches) {
    // Run Code
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      if (scroll_top < 10) {
        el_autohide1.classList.add('top-scrolled-up');
      } else{
        el_autohide1.classList.remove('top-scrolled-up');
      }
    });
    // window.addEventListener
  }
}); // DOMContentLoaded  end
