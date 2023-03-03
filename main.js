"use strict";

const menuOpen = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
const menuClose = document.querySelector(".menu-close");
const showMenu = document.querySelector(".showing");
const hidden = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", function () {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("showing");
  overlay.classList.remove("hidden");
});

menuClose.addEventListener("click", function () {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("showing");
  overlay.classList.add("hidden");
});
