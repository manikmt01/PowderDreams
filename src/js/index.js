// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const header = document.querySelector('header');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

// Mobile dropdown toggle (click-based for mobile)
document.querySelectorAll('.mobile-dropdown-toggle').forEach(button => {
  button.addEventListener('click', e => {
    e.stopPropagation();
    const dropdown = button.nextElementSibling;
    dropdown.classList.toggle('hidden');
  });
});

// Close mobile dropdowns when clicking outside
document.addEventListener('click', e => {
  document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
    if (
      !dropdown.contains(e.target) &&
      !dropdown.previousElementSibling.contains(e.target)
    ) {
      dropdown.classList.add('hidden');
    }
  });
});

// Scroll event to toggle 'scrolled' class on header
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 60) {
    header.classList.add('scrolled');
  } else if (scrollPosition <= 50) {
    header.classList.remove('scrolled');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
