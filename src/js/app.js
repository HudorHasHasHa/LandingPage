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

const header = document.querySelector("header");
const body = document.querySelector("body");
const options = {};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if(entry){
      header.classList.add('header-scrolled');
    }
  })
}, options);

observer.observe(body)