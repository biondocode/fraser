document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.custom-nav-links');
  const menuToggle = document.querySelector('.custom-menu-toggle');

  // Alternar visibilidade do menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
