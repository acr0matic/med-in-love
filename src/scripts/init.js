const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy__item',

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    const loader = container.querySelector('.preloader');

    if (loader) loader.classList.add('preloader--hide');
  },
});

const portfolioHome = new Swiper('.slider-portfolio-home', {
  slidesPerView: 1,
  spaceBetween: 30,

  grabCursor: true,

  breakpoints: {
    420: {
      slidesPerView: 'auto',
    },

    991: {
      centeredSlides: true,
    }
  }

  // mousewheel: {
  //   releaseOnEdges: true,
  // },
});

const feedbackHome = new Swiper('.slider-feedback-home', {
  slidesPerView: 1,
  spaceBetween: 30,

  grabCursor: true,

  breakpoints: {
    420: {
      slidesPerView: 'auto',
    },

    991: {
      centeredSlides: true,
    }
  }

  // mousewheel: {
  //   releaseOnEdges: true,
  // },
});