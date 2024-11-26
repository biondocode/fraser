document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');

  // Alternar visibilidade do menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});