import './style.css'
// HEADER SHADOW
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 80) {
        header.classList.add('shadow-2xl','bg-background');
    } else {
        header.classList.remove('shadow-2xl','bg-background');
    }
});
// NAVBAR
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
const mobileDropdown = document.getElementById('mobileDropdown');
const mobileArrow = document.getElementById('mobileArrow');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

mobileDropdownBtn.addEventListener('click', () => {
  mobileDropdown.classList.toggle('hidden');
  mobileArrow.classList.toggle('rotate-180');
});