$(function () {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    // animate to second panel

    .to('.every-day-section', 0, { autoAlpha: 0, zIndex: '1', position: 'relative' }) // move back in 3D space
    .to('.every-day-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' }) // move in to first panel
    .to('.every-day-section', 0, { autoAlpha: 0, zIndex: '-1', position: 'absolute' }) // move back to origin in 3D space

    // animate to third panel
    .to('.breathing-section', 0, { autoAlpha: 0, zIndex: '-1', position: 'relative' })
    .to('.breathing-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.breathing-section', 0, { autoAlpha: 0, zIndex: '-1', position: 'absolute' })
    // animate to forth panel
    .to('.covid-banner', 0, { autoAlpha: 0, zIndex: '-1', position: 'relative' })
    .to('.covid-banner', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.covid-banner', 0, { autoAlpha: 0, zIndex: '-1', position: 'absolute' })
    // animate to fifth panel
    .to('.last-lady-section', 0, { autoAlpha: 0, zIndex: '-1', position: 'relative' })
    .to('.last-lady-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.last-lady-section', 0, { autoAlpha: 1, zIndex: '1', position: 'relative' });

  var wipeAnimation1 = new TimelineMax();
  // animate to second panel

  // animate to third panel

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: '#pinContainer',
    triggerHook: 'onLeave',
    duration: '400%',
  })
    .setPin('#pinContainer')
    .setTween(wipeAnimation)
    .addTo(controller)
    .setClassToggle('.section-excellence', 'active');

  // build scenes
  new ScrollMagic.Scene({ triggerElement: '.every-day-section' })
    .setClassToggle('.every-day-section', 'active') // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '.breathing-section' })
    .setClassToggle('.breathing-section', 'active') // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '.covid-banner' })
    .setClassToggle('.covid-banner', 'active') // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '.last-lady-section' })
    .setClassToggle('.last-lady-section', 'active') // add class toggle
    .addTo(controller);
});
