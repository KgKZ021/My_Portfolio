// ==========================================
// Intersection Observer for Scroll Reveals
// ==========================================

export function initObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.hud-card, .timeline-node, .education-card, .skill-category-card').forEach(el => {
    observer.observe(el);
  });
}
