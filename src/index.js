import "./less/index.less";

// Your code goes here!
const page = document.querySelector("body");
const heading = document.querySelector(".logo-heading");
const navLinks = document.querySelectorAll(".nav-links");
const mainImg = document.querySelector(".intro img");
const midImages = document.querySelectorAll(".img-content img");
const bottomImg = document.querySelector(".content-destination img");
const buttons = document.querySelectorAll(".btn");
const footer = document.querySelector(".footer");

const spin = function (e) {
  heading.classList.add(".spin");
};
heading.addEventListener("mouseover", spin);

const grow = function (e) {
  navLinks.classList.add(".grow");
};
navLinks.addEventListener("select", grow);

const fade = function (e) {
  page.classList.add(".fade");
};
page.addEventListener("load", fade);

const squish = function (e) {
  mainImg.classList.add(".squish");
};
mainImg.addEventListener("dblclick", squish);

const changeColor = function (e) {
  buttons.classList.add("diffColor");
};
buttons.addEventListener("keydown", changeColor);

const shrink = function (e) {
  footer.classList.add(".shrink");
};
footer.addEventListener("resize", shrink);

const squash = function (e) {
  midImages.classList.add(".squish");
};
midImages.addEventListener("focus", squash);

const backGround = function (e) {
  body.classList.add(".bgColor");
};
body.addEventListener("scroll", backGround);

const dragDrop = function (e) {
  bottomImg.classList.add("drag-drop");
};
bottomImg.addEventListener("drag/drop", dragDrop);
