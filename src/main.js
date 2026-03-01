import './style.css'
// HEADER SHADOW
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');
    if (window.scrollY > 80) {
        header.classList.add('shadow-xl','bg-background','sticky');
        hero.classList.remove('lg:pt-[120px]');
    } else {
        header.classList.remove('shadow-xl','bg-background','sticky');
        hero.classList.add('lg:pt-[120px]');
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