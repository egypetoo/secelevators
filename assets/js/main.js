// Initialize Swiper
const heroSwiper = new Swiper('.heroSwiper', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Clients Logos Slider
const clientsSwiper = new Swiper('.clientsSwiper', {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

function openMenu() {
  navMenu.classList.add('open');
  overlay.classList.add('show');
  closeMenu.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMenuFn() {
  navMenu.classList.remove('open');
  overlay.classList.remove('show');
  closeMenu.style.display = 'none';
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFn);
overlay.addEventListener('click', closeMenuFn);

// Close menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenuFn();
  }
});

// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
