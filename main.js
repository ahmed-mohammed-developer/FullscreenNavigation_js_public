let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let closee = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

closee.onclick = function () {
  this.parentElement.classList.remove("open");
};
