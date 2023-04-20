// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile navigation menu
const nav = document.querySelector('nav');
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');
menuIcon.innerHTML = '&#9776;';

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('mobile-nav');
});

nav.insertBefore(menuIcon, nav.firstChild);

// Hide mobile navigation menu when clicking a link
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('mobile-nav');
  }
});
