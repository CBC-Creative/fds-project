$(function () {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    // animate to first panel
    .to('.measured-progress-section', 0.15, { autoAlpha: 1, zIndex: '1', position: 'relative' }) // move back in 3D space
    .to('.measured-progress-section', 1, { autoAlpha: 0.15, zIndex: '1', position: 'relative' }) // move in to first panel
    .to('.measured-progress-section', 0.15, { autoAlpha: 0, zIndex: '-1', position: 'absolute' }) // move back to origin in 3D space
    // animate to sectond panel
    .to('.tree-planted-section', 0.15, { autoAlpha: 0.15, zIndex: '-1', position: 'relative' })
    .to('.tree-planted-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.tree-planted-section', 0.15, { autoAlpha: 0, zIndex: '-1', position: 'absolute' })
    // animate to third panel
    .to('.recycled-section', 0.15, { autoAlpha: 0.15, zIndex: '-1', position: 'relative' })
    .to('.recycled-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.recycled-section', 0.15, { autoAlpha: 0, zIndex: '-1', position: 'absolute' })
    // animate to forth panel
    .to('.landfill-section', 0.15, { autoAlpha: 0.15, zIndex: '-1', position: 'relative' })
    .to('.landfill-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.landfill-section', 0.15, { autoAlpha: 0, zIndex: '-1', position: 'absolute' })
    // animate to fifth panel
    .to('.bifma-section', 0.15, { autoAlpha: 0.15, zIndex: '-1', position: 'relative' })
    .to('.bifma-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.bifma-section', 0.15, { autoAlpha: 0, zIndex: '-1', position: 'absolute' })
    // animate to sixth panel
    .to('.advantage-gold-section', 0.15, { autoAlpha: 0.15, zIndex: '-1', position: 'relative' })
    .to('.advantage-gold-section', 1, { autoAlpha: 1, zIndex: '1', position: 'relative' })
    .to('.advantage-gold-section', 0.15, { autoAlpha: 1, zIndex: '1', position: 'relative' });

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
