const header = document.getElementById('header');

if (header) {
  const mobile = header.querySelector('#mobile-menu');
  const burger = header.querySelector('.header__burger');

  burger.addEventListener('click', () => Menu());

  function Menu(state) {
    if (state === 'close') {
      mobile.classList.remove('mobile-menu--open');
      burger.firstElementChild.classList.remove('is-active');
      document.body.classList.remove('disable-scroll');
    }

    else {
      mobile.classList.toggle('mobile-menu--open');
      burger.firstElementChild.classList.toggle('is-active')
      document.body.classList.toggle('disable-scroll');
    }
  }
}
