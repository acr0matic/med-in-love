const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy__item',

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    const loader = container.querySelector('.preloader');

    if (loader) loader.classList.add('preloader--hide');
  },
});

const portfolioHome = new Swiper('.slider-portfolio-home', {
  slidesPerView: 1.6,
  centeredSlides: true,
  spaceBetween: 30,

  grabCursor: true,

  // mousewheel: {
  //   releaseOnEdges: true,
  // },
});

const feedbackHome = new Swiper('.slider-feedback-home', {
  slidesPerView: 1.6,
  centeredSlides: true,
  spaceBetween: 30,

  grabCursor: true,

  // mousewheel: {
  //   releaseOnEdges: true,
  // },
});