$(function () {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    // animate to second panel
    .to('.every-day-section', 0.15, { autoAlpha: 1, zIndex: '1', position: 'relative' }) // move back in 3D space
    .to('.every-day-section', 1, { autoAlpha: 0.15, zIndex: '1', position: 'relative' }) // move in to first panel
    .to('.every-day-section', 0.15, { autoAlpha: 0, zIndex: '-1', position: 'absolute' }) // move back to origin in 3D space
    // animate to third panel
    .to('.breathing-section', 0.15, { autoAlpha: 0.15, zIndex: '-1', position: 'relative' })
    .to('.breathing-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.breathing-section', 0.15, { autoAlpha: 0, zIndex: '-1', position: 'absolute' })
    // animate to forth panel
    .to('.covid-banner', 0.15, { autoAlpha: 0.15, zIndex: '-1', position: 'relative' })
    .to('.covid-banner', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.covid-banner', 0.15, { autoAlpha: 0, zIndex: '-1', position: 'absolute' })
    // animate to fifth panel
    .to('.last-lady-section', 0.15, { autoAlpha: 0.15, zIndex: '-1', position: 'relative' })
    .to('.last-lady-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.last-lady-section', 0.15, { autoAlpha: 1, zIndex: '1', position: 'relative' });

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: '#pinContainer',
    triggerHook: 'onLeave',
    duration: '400%',
  })
    .setPin('#pinContainer')
    .setTween(wipeAnimation)
    .addTo(controller);
});
