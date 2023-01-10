const mediaQuerymax767 = window.matchMedia('(max-width: 767.98px)');
      document.addEventListener('DOMContentLoaded', function () {
      var htmltofind = document.getElementsByClassName('myaccount-active');
      var sethtml = document.getElementsByClassName('active-menu-mobile');      
  for (let htm = 0; htm < htmltofind.length; htm++) {
    var gethtml = htmltofind[htm].innerHTML;
    for (let stm = 0; stm < sethtml.length; stm++) {
      sethtml[stm].innerHTML = gethtml;
    }   
  }
  if (mediaQuerymax767.matches) {
    var mobilesidenavclick = document.getElementsByClassName('mobile-navigationmyaccount');
    var addactiveclass = document.getElementsByClassName('myaccount-nav');
    for (let nv = 0; nv < mobilesidenavclick.length; nv++) {
      mobilesidenavclick[nv].addEventListener('click', function () {
        addactiveclass[0].classList.toggle('active');     
    });
  }
  }
});