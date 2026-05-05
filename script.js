/* Livraria Pétalas — script.js */

(function () {
  'use strict';

  /* ---- Mobile menu ---- */
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var iconMenu   = hamburger.querySelector('.icon-menu');
  var iconClose  = hamburger.querySelector('.icon-close');

  hamburger.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('is-open');
    iconMenu.style.display  = isOpen ? 'none' : '';
    iconClose.style.display = isOpen ? '' : 'none';
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
      iconMenu.style.display  = '';
      iconClose.style.display = 'none';
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  /* ---- Heart / like toggle ---- */
  document.querySelectorAll('.book-card__heart').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var liked = btn.dataset.liked === 'true';
      btn.dataset.liked = String(!liked);
      btn.classList.toggle('is-liked', !liked);
      btn.setAttribute('aria-label', !liked ? 'Remover dos favoritos' : 'Favoritar');
    });
  });

  /* ---- Newsletter form ---- */
  var form    = document.getElementById('newsletterForm');
  var success = document.getElementById('newsletterSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('newsletterEmail').value.trim();
      if (!email) return;
      form.hidden    = true;
      success.hidden = false;
    });
  }

  /* ---- Scroll reveal via Intersection Observer ---- */
  var targets = document.querySelectorAll(
    '.book-card, .cat-card, .testimonial-card, .perk, .about__grid, .hero__content, .hero__image-wrap'
  );

  var revealStyle = document.createElement('style');
  revealStyle.textContent = [
    '.will-reveal{opacity:0;transform:translateY(20px);transition:opacity .55s ease,transform .55s ease}',
    '.will-reveal.is-visible{opacity:1;transform:translateY(0)}'
  ].join('');
  document.head.appendChild(revealStyle);

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) {
    el.classList.add('will-reveal');
    observer.observe(el);
  });

})();
