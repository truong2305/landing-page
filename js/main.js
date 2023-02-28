/** @format */

const menu = document.getElementById("btn-menu");
const navbar = document.getElementById("navbar-mobile");
const header = document.getElementById("header");

menu.onclick = () => {
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  if (window.scrollY > 20) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
};
