// Smooth scroll reveal animations via IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.animate‑on‑scroll').forEach(el => {
    observer.observe(el);
  });

  // Contact form submission stub
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      // Here you could add backend submission logic
      alert('Thank you! Your inquiry has been sent. I’ll be in touch soon.');
      form.reset();
    });
  }
});
