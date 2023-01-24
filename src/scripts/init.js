function GetHeight(target) {
  const height = target.offsetHeight;
  document.documentElement.style.setProperty('--header-height', height + 'px');
}

const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy__item',

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    const loader = container.querySelector('.preloader');

    if (loader) loader.classList.add('preloader--hide');
  },
});



