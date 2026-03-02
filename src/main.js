import './style.css'
// HEADER SHADOW
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('shadow-2xl','md:bg-background');
        header.classList.remove('md:bg-transparent');
    } else {
        header.classList.remove('shadow-2xl','md:bg-background');
        header.classList.add('md:bg-transparent')
    }
});
// DESKTOP MENU
const overlay = document.getElementById('overlay');
const dropdownMenuItem = document.querySelector("#desktop-menu > .group");
dropdownMenuItem.addEventListener('mouseover', () => {
    overlay.classList.remove('hidden');
    header.classList.remove('md:bg-transparent');
});
dropdownMenuItem.addEventListener('mouseout', () => {
    overlay.classList.add('hidden');
    if (window.scrollY > 80) {
        header.classList.remove('md:bg-transparent');
    } else {
        header.classList.add('md:bg-transparent')
    }
});
// NAVBAR
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
const mobileDropdown = document.getElementById('mobileDropdown');
const mobileBackMenu = document.getElementById('backBtnMobileMenu');
const mobileMenuItems = document.querySelectorAll('#mobileMenu > div > a');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
//BACK BTN
mobileBackMenu.addEventListener('click', () => {
  mobileDropdown.classList.toggle('hidden');
  mobileDropdownBtn.classList.toggle('hidden');
  mobileBackMenu.classList.toggle('hidden');
  mobileMenuItems.forEach(element => {
    element.classList.toggle('hidden');
  });
});
// DROPDOWN BTN
mobileDropdownBtn.addEventListener('click', () => {
  mobileBackMenu.classList.toggle('hidden');
  mobileDropdown.classList.toggle('hidden');
  mobileDropdownBtn.classList.toggle('hidden');
  mobileMenuItems.forEach(element => {
    element.classList.toggle('hidden');
  });
});