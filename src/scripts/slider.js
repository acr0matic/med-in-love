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