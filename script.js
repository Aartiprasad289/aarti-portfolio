
// ======================= Navbar Toggle (Mobile) =======================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('change', () => {
  navLinks.classList.toggle('open');
});

// ======================= Typing Animation =======================
const nameSpan = document.querySelector('.hero-left h1 span');
const fullName = "Aarti Prasad";
let charIndex = 0;

function typeName() {
  if (charIndex < fullName.length) {
    nameSpan.textContent += fullName.charAt(charIndex);
    charIndex++;
    setTimeout(typeName, 120);
  }
}
if (nameSpan) {
  nameSpan.textContent = "";
  typeName();
}

// ======================= Smooth Scroll for Nav Links =======================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ======================= Scroll Reveal Animations =======================
ScrollReveal().reveal('.hero-left', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 300
});
ScrollReveal().reveal('.hero-right', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 500
});
ScrollReveal().reveal('.navbar', {
  origin: 'top',
  distance: '20px',
  duration: 800,
  delay: 200
});
ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});
ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});
ScrollReveal().reveal('.skill-card', {
  interval: 100,
  distance: '20px',
  origin: 'bottom',
  duration: 800
});
ScrollReveal().reveal('.project-card', {
  interval: 150,
  distance: '30px',
  origin: 'bottom',
  duration: 800
});
ScrollReveal().reveal('.Education-info', {
  interval: 100,
  distance: '40px',
  origin: 'bottom',
  duration: 800
});
