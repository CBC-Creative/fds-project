const mediaQuerymax767 = window.matchMedia('(max-width: 767.98px)');
document.addEventListener('DOMContentLoaded', function () { 
if (mediaQuerymax767.matches) {
var disablesider = document.getElementsByClassName('carousel-indicators');
for (let dslide = 0; dslide < disablesider.length; dslide++) {  
disablesider[dslide].classList.add('mobile-slides');
disablesider[dslide].classList.remove('carousel-indicators');    
}  
}
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
      var tabinnerhtml = tabboxlinks[tbl].innerHTML
      tabdropdown[0].innerHTML = tabinnerhtml;
      navpills[0].classList.remove('showpills');
    });          
  }
}
});


   $(function () { // wait for document ready
     // init
     var controller = new ScrollMagic.Controller();

     // define movement of panels
     var wipeAnimation = new TimelineMax()
       // animate to second panel       
       .to(".every-day-section", 0.5, {autoAlpha: 1, zIndex:'1', position:'relative'})		// move back in 3D space
       .to(".every-day-section", 1,   {autoAlpha: 0.5, zIndex:'1', position:'relative'})	// move in to first panel
       .to(".every-day-section", 0.5, {autoAlpha: 0, zIndex:'-1', position:'absolute'})		// move back to origin in 3D space          
       // animate to third panel
       .to(".breathing-section", 0.5, {autoAlpha: 1, zIndex:'-1', position:'relative'})
       .to(".breathing-section", 1,   {autoAlpha: 0.5, zIndex:'1', position:'relative'})
       .to(".breathing-section", 0.5, {autoAlpha: 0, zIndex:'-1', position:'absolute'})
       // animate to forth panel
       .to(".covid-banner", 0.5, {autoAlpha: 1, zIndex:'-1', position:'relative'})
       .to(".covid-banner", 1,   {autoAlpha: 0.5, zIndex:'1', position:'relative'})
       .to(".covid-banner", 0.5, {autoAlpha: 0, zIndex:'-1', position:'absolute'})
       // animate to fifth panel
       .to(".last-lady-section", 0.5, {autoAlpha: 1, zIndex:'-1', position:'relative'})
       .to(".last-lady-section", 1,   {autoAlpha: 1, zIndex:'1', position:'relative'})
       .to(".last-lady-section", 0.5, {autoAlpha: 1, zIndex:'1', position:'relative'})
       

     // create scene to pin and link animation
     new ScrollMagic.Scene({
         triggerElement: "#pinContainer",
         triggerHook: "onLeave",
         duration: "500%"
       })
       .setPin("#pinContainer")
       .setTween(wipeAnimation)
       .addTo(controller);            
   });
