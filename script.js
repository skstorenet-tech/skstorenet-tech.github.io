document.addEventListener('DOMContentLoaded', () => {

  // ============ Scroll Reveal ============
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));

  // ============ Sticky Header ============
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ============ Hamburger Menu ============
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    });
  });

  // ============ Smooth Scrolling ============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerHeight - 10,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============ Active Nav Highlight ============
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // ============ Hero Paw Walk Animation ============
  (function initPawWalk() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    function createPawTrail() {
      const heroRect = hero.getBoundingClientRect();
      const heroWidth = heroRect.width;
      const heroHeight = heroRect.height;
      const steps = 14;
      const stepWidth = heroWidth / steps;

      // Sine wave path: paws walk left→right with up-down wave
      const amplitude = heroHeight * 0.15; // wave height
      const centerY = heroHeight * 0.45;   // vertical center of wave

      for (let i = 0; i < steps; i++) {
        setTimeout(() => {
          const paw = document.createElement('span');
          paw.classList.add('paw-walk');
          paw.innerHTML = '<i class="fa-solid fa-paw"></i>';

          // Alternate left/right paw
          const isLeft = i % 2 === 0;
          paw.classList.add(isLeft ? 'left' : 'right');
          paw.style.setProperty('--paw-rotate', isLeft ? '-25deg' : '25deg');

          // X position: spread across hero width
          const x = stepWidth * i + stepWidth * 0.2;

          // Y position: sine wave path with small offset per foot
          const progress = i / steps;
          const sineY = Math.sin(progress * Math.PI * 2) * amplitude;
          const footOffset = isLeft ? -8 : 8;
          const y = centerY + sineY + footOffset;

          paw.style.left = x + 'px';
          paw.style.top = y + 'px';

          hero.appendChild(paw);

          // Remove after animation ends
          paw.addEventListener('animationend', () => paw.remove());
        }, i * 250);
      }
    }

    // First trail after 2s, then repeat every 10s
    setTimeout(createPawTrail, 2000);
    setInterval(createPawTrail, 10000);
  })();

});
