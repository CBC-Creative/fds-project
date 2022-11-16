// Custom Navication JS
document.addEventListener('DOMContentLoaded', function () {
  el_autohide = document.querySelector('.autohide');

  if (el_autohide) {
    var last_scroll_top = 0;
    el_autohide.classList.add('initial-scrolled');
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      if (scroll_top == 0) {
        el_autohide.classList.add('initial-scrolled');
        el_autohide.classList.remove('scrolled-up');
      } else if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove('scrolled-down');
        el_autohide.classList.add('scrolled-up');
      } else {
        el_autohide.classList.remove('scrolled-up');
        el_autohide.classList.add('scrolled-down');
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
}); // DOMContentLoaded  end

// Custom Navication JS end
