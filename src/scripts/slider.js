const portfolioService = new Swiper('.slider-portfolio', {
  slidesPerView: 1.8,
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,

  navigation: {
    nextEl: '.slider-portfolio .swiper-button-next',
    prevEl: '.slider-portfolio .swiper-button-prev',
  },
});

const portfolioHome = new Swiper('.slider-portfolio-home', {
  slidesPerView: 1,
  spaceBetween: 30,

  grabCursor: true,

  pagination: {
    el: '.slider-portfolio-home .swiper-pagination',
  },

  navigation: {
    nextEl: '.slider-portfolio-home .swiper-button-next',
    prevEl: '.slider-portfolio-home .swiper-button-prev',
  },

  breakpoints: {
    420: {
      slidesPerView: 'auto',
    },

    991: {
      centeredSlides: true,
    }
  }
});

const feedbackHome = new Swiper('.slider-feedback-home', {
  slidesPerView: 1,
  spaceBetween: 30,

  grabCursor: true,

  pagination: {
    el: '.slider-feedback-home .swiper-pagination',
  },

  navigation: {
    nextEl: '.slider-feedback-home .swiper-button-next',
    prevEl: '.slider-feedback-home .swiper-button-prev',
  },

  breakpoints: {
    420: {
      slidesPerView: 'auto',
    },

    991: {
      centeredSlides: true,
    }
  }
});

const serviceList = [];
const serviceTab = new Swiper('.slider-service', {
  speed: 400,
  simulateTouch: false,
  spaceBetween: 30,
  autoHeight: true,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  on: {
    beforeInit(instance) {
      const slides = instance.wrapperEl.querySelectorAll('.swiper-slide')
      slides.forEach((slide) => {
        serviceList.push(slide.dataset.title);
      });
    },
  },

  pagination: {
    el: '.slider-service .swiper-pagination',
    clickable: true,

    renderBullet(index, className) {
      return `<span class="${className}">${serviceList[index]}</span>`;
    },
  },
});

//////////////////////////////////////////////////////////////////

if (isMobile) {
  new Swiper('.slider-team', {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
      el: '.slider-team .swiper-pagination',
    },

    navigation: {
      nextEl: '.slider-team .swiper-button-next',
      prevEl: '.slider-team .swiper-button-prev',
    },

    breakpoints: {
      420: {
        slidesPerView: 1.2,
      },
    },
  });
}