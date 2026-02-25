/* ==========================================================
   Slideshow + Mobile Nav - No dependencies
   ========================================================== */
(function () {
  'use strict';

  /* ----------------------------------------------------------
     IMAGES
     This is the only place you ever need to edit to add,
     remove, or reorder photos. JS builds the slides from it.
  ---------------------------------------------------------- */
   const IMAGES = [
     { src: 'images/photo-1.jpg', alt: '' },
     { src: 'images/photo-2.jpg', alt: '' },
     { src: 'images/photo-3.jpg', alt: '' },
     { src: 'images/photo-4.jpg', alt: '' },
     { src: 'images/photo-5.jpg', alt: '' },
     { src: 'images/photo-6.jpg', alt: '' },
     { src: 'images/photo-7.jpg', alt: '' },
     { src: 'images/photo-8.jpg', alt: '' },
     { src: 'images/photo-9.jpg', alt: '' },
     { src: 'images/photo-10.jpg', alt: '' },
     { src: 'images/photo-11.jpg', alt: '' },
     { src: 'images/photo-12.jpg', alt: '' },
     { src: 'images/photo-13.jpg', alt: '' },
     { src: 'images/photo-14.jpg', alt: '' },
     { src: 'images/photo-15.jpg', alt: '' },
     { src: 'images/photo-16.jpg', alt: '' },
     { src: 'images/photo-17.jpg', alt: '' },
     { src: 'images/photo-18.jpg', alt: '' },
     { src: 'images/photo-19.jpg', alt: '' },
     { src: 'images/photo-20.jpg', alt: '' },
     { src: 'images/photo-21.jpg', alt: '' },
     { src: 'images/photo-22.jpg', alt: '' },
     { src: 'images/photo-23.jpg', alt: '' },
     { src: 'images/photo-24.jpg', alt: '' },
     { src: 'images/photo-25.jpg', alt: '' },
     { src: 'images/photo-26.jpg', alt: '' },
     { src: 'images/photo-27.jpg', alt: '' },
   ];

  /* Build slides + dots into the DOM */
  const slidesEl = document.getElementById('slides');

  IMAGES.forEach(function (img, i) {
    /* Slide */
    const li = document.createElement('li');
    li.className = 'slide';
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.alt;
    image.loading = i === 0 ? 'eager' : 'lazy';
    li.appendChild(image);
    slidesEl.appendChild(li);


  });

  /* ----------------------------------------------------------
     SLIDESHOW
  ---------------------------------------------------------- */
  const slides   = document.querySelectorAll('.slide');
  const zonePrev = document.getElementById('zone-prev');
  const zoneNext = document.getElementById('zone-next');
  const caretPrev = document.getElementById('caret-prev');
  const caretNext = document.getElementById('caret-next');

  let current = 0;
  const total = slides.length;

  function goTo(n) {
    slides[current].classList.remove('active');
    current = (n + total) % total;
    slides[current].classList.add('active');
  }

  goTo(0);

  zonePrev.addEventListener('click', () => goTo(current - 1));
  zoneNext.addEventListener('click', () => goTo(current + 1));
  caretPrev.addEventListener('click', () => goTo(current - 1));
  caretNext.addEventListener('click', () => goTo(current + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  let swipeStartX = 0;
  document.addEventListener('touchstart', (e) => {
    swipeStartX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - swipeStartX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  }, { passive: true });

  /* ----------------------------------------------------------
     MOBILE NAV
  ---------------------------------------------------------- */
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  burger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

}());
