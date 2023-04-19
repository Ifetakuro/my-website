"use strict";

//TYPEWRITER EFFECT
const intro = "Hello, I am Oluwafisayo Takuro. I am a Frontend Developer.";
const speed = 90;

let i = 0;
const typeWriter = () => {
  if (i < intro.length) {
    document.querySelector(".introduction").innerHTML += intro.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
typeWriter();

//UPDATE DATE
const todaysDate = new Date();
const year = todaysDate.getFullYear();
document.getElementById("footer-year").innerText = year;

// CHANGE NAV COLOR ON SCROLL
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  let windowPosition = window.scrollY > 1100 && window.scrollY < 2200;
  nav.classList.toggle("scroll-active", windowPosition);
});

//CHANGE ACTIVE CLASS
let navbarLink = document.querySelectorAll(".navbar-nav .nav-link");

document.addEventListener("click", (e) => {
  for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].classList.remove("active");
  }

  e.target.closest(".nav-link").classList.add("active");
});
