const hideTarget = document.querySelectorAll('[data-hide]');
const footerPosition = document.getElementById('footer').offsetTop - window.innerHeight;

hideTarget.forEach(target => {
  if (target.dataset.hide == 'footer') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > footerPosition - 300) target.classList.add('hidden');
      else target.classList.remove('hidden');
    });
  }
});

