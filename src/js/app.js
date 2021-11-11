// const button = document.querySelector('.menu');
// const sidebar = document.querySelector('.mobile-nav');
// const overlay = document.querySelector('.overlay');

// button.addEventListener('click', function() {
//   sidebar.classList.toggle('is-active');
//   overlay.classList.toggle('is-active');
// });

// overlay.addEventListener('click', function() {
//   sidebar.classList.remove('is-active');
//   overlay.classList.remove('is-active');
// });

let position = window.scrollY;
const header = document.querySelector("header");
const header_height = header.offsetHeight;
const add = () => header.classList.add("header-scrolled")
const remove = () => header.classList.remove("header-scrolled")

window.addEventListener('scroll', function() {
  position = window.scrollY;
  
  if (position >= header_height) { add() }
  else { remove() }
});

