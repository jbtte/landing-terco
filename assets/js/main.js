/* ===========================
   HERO QUOTE CAROUSEL
=========================== */
(function () {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.hq__slide'));
  if (slides.length === 0) return;

  let current = 0;
  let autoTimer;
  const AUTO_DELAY = 10000;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    const slideW = track.parentElement.offsetWidth;
    track.style.transform = `translateX(-${current * slideW}px)`;
    track.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
    resetTimer();
  }

  function startTimer() { autoTimer = setInterval(() => goTo(current + 1), AUTO_DELAY); }
  function resetTimer() { clearInterval(autoTimer); startTimer(); }

  startTimer();

  // Swipe
  let tx = 0;
  track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) dx < 0 ? goTo(current + 1) : goTo(current - 1);
  }, { passive: true });

  // Pause on hover
  track.closest('.hero__quotes').addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.closest('.hero__quotes').addEventListener('mouseleave', startTimer);
})();

/* ===========================
   SMOOTH SCROLL
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ===========================
   FADE-IN ON SCROLL
=========================== */
(function () {
  const targets = document.querySelectorAll('.info-card, .sobre__image-wrap, .sobre__text');
  if (!('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    }),
    { threshold: 0.1 }
  );

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    obs.observe(el);
  });
})();
