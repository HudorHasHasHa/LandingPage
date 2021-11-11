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

