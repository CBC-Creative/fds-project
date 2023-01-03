const mediaQuerymax767 = window.matchMedia('(max-width: 767.98px)');
document.addEventListener('DOMContentLoaded', function () { 
if (mediaQuerymax767.matches) {
var disablesider = document.getElementsByClassName('carousel-indicators');
for (let dslide = 0; dslide < disablesider.length; dslide++) {
disablesider[dslide].classList.add('mobile-slides');
disablesider[dslide].classList.remove('carousel-indicators');    
}  
}
});