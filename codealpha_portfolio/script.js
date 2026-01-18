// Simple animation on scroll
const sections = document.querySelectorAll('.section');

const revealSection = () => {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
};

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealSection);
revealSection();

// Prevent actual form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  form.reset();
});
