/* ============================================================
ELITE BARBER — Script FIXED FULL
============================================================ */

(function () {

document.body.classList.add('js-enabled');

// ── NAVBAR SCROLL ────────────────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ── MOBILE MENU ──────────────────────────────────────────────
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('mobile-open');
    const isOpen = navbar.classList.contains('mobile-open');
    mobileMenu.style.display = isOpen ? 'flex' : 'none';

    const spans = menuToggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    }
  });
}

// ── REVEAL ON SCROLL (FIXED) ─────────────────────────────────
const revealElements = document.querySelectorAll('.reveal-up, .reveal-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => revealObserver.observe(el));

// 🔥 FALLBACK (EVITA PANTALLA NEGRA)
setTimeout(() => {
  document.querySelectorAll('.reveal-up, .reveal-card').forEach(el => {
    el.classList.add('visible');
  });
}, 500);

// ── STAT BAR ────────────────────────────────────────────────
const statBar = document.querySelector('.stat-bar-fill');

if (statBar) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statBar.classList.add('animated');
      }
    });
  });

  barObserver.observe(statBar);
}

// ── SMOOTH SCROLL ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ── PARALLAX ────────────────────────────────────────────────
const heroBgText = document.querySelector('.hero-bg-text');

if (heroBgText) {
  window.addEventListener('scroll', () => {
    heroBgText.style.transform =
      `translate(-50%, calc(-50% + ${window.scrollY * 0.3}px))`;
  });
}

})();