const navLinks = document.querySelectorAll('.story__nav-link');
const content = document.querySelector('.story__content');

/**
 * Scrollspy story section
 */
const scrollSpy = () => {
  /* help function */
  function getCurrentSection() {
    const sections = document.querySelectorAll('.story__content > div');

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();

      if (rect.x + rect.width >= rect.width * 0.15) {
        return section;
      }
    }

    return null;
  }

  /* scroll to section */
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const part = targetElement.querySelector('.story__content-part:first-child');

      const targetOffsetLeft = part.offsetLeft - content.offsetLeft - (content.offsetWidth - part.offsetWidth) / 2 - 10;

      content.scrollTo({
        left: targetOffsetLeft,
        behavior: 'smooth',
      });
    });
  });

  /* mouse down event */
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  content.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    startX = event.pageX - content.offsetLeft;
    scrollLeft = content.scrollLeft;
  });

  content.addEventListener('mousemove', (event) => {
    if (!isMouseDown) return;
    event.preventDefault();
    const x = event.pageX - content.offsetLeft;
    const walk = (x - startX) * 3; // установите желаемую скорость прокрутки
    content.scrollLeft = scrollLeft - walk;
  });

  content.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  content.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  /* set active nav item */
  content.addEventListener('scroll', () => {
    const currentSection = getCurrentSection();

    if (!currentSection) {
      return;
    }

    navLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${currentSection.id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  window.addEventListener('load', () => {
    const currentSection = getCurrentSection();

    if (!currentSection) {
      return;
    }

    if (currentSection !== null) {
      const currentLink = document.querySelector(`.story__nav-link[href="#${currentSection.id}"]`);
      currentLink.classList.add('active');
    }
  });

  /* horizontal scroll */
  content.addEventListener('wheel', (evt) => {
    const isScrollingDown = evt.deltaY > 0;
    const isScrollingUp = evt.deltaY < 0;

    if (
      !(isScrollingDown && content.scrollLeft + content.clientWidth === content.scrollWidth) &&
      !(isScrollingUp && content.scrollLeft === 0)
    ) {
      evt.preventDefault();
      content.scrollLeft += evt.deltaY;
    }
  });
};


scrollSpy();

/**
 * Skip story
 * scroll to last section
 */
const skipStoryButton = document.querySelector('.story__skip');
skipStoryButton.onclick = () => {
  [...navLinks].at(-1).click();
};
