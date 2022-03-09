import "./less/index.less";

// Your code goes here!
const page = document.querySelector("body");
const header = document.querySelector("header");
const heading = document.querySelector(".logo-heading");
const navLinks = document.querySelectorAll(".nav-link");
const mainImg = document.querySelector(".intro img");
const midImage1 = document.querySelector(".img1");
const midImage2 = document.querySelector(".img2");
const input = document.querySelector("textarea");
const bottomImg = document.querySelector(".content-destination img");
// const buttons = document.querySelector(".btn");
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");

const para = document.querySelector(".text-content p");
const para2 = document.querySelector(".content-destination p");
const footer = document.querySelector("footer");

// Doubleclick
const squish = function (e) {
  e.target.classList.toggle("squish");
};
mainImg.addEventListener("dblclick", squish);

// Mouseover
const flip = function (e) {
  e.target.classList.toggle("flip");
};
bottomImg.addEventListener("mouseover", flip);

// Keydown
const changeColor = function (e) {
  e.preventDefault();
  if (e.key === "Enter") {
    midImage1.classList.toggle("flip");
    midImage2.classList.toggle("flip");
    console.log("hi");
  }
};
window.addEventListener("keydown", changeColor);

// Load
const fade = function (e) {
  //   page.classList.toggle("fade");
  // e.target.classList.toggle("fade");
  alert("hello world?");
};
window.addEventListener("load", fade);

// Select
const shrink = function (e) {
  //   navLinks.target.style.backgroundColor = "blue";
  heading.classList.add("pinkBG");
  console.log("test");
};
document.addEventListener("select", shrink);

// Scroll
const backGround = function (e) {
  page.classList.toggle("pinkBG");
};
document.addEventListener("scroll", backGround);

// Resize
const blueBG = function (e) {
  para.classList.toggle("blueBG");
  console.log("another test");
};
window.addEventListener("resize", blueBG);

//Mouseout
const mouse = function (e) {
  footer.classList.toggle("diffColor");
  e.target.classList.toggle("diffColor");
  console.log("WHYYY");
};
footer.addEventListener("mouseout", mouse);

// Copy
document.addEventListener("copy", (e) => {
  para2.style.backgroundColor = "purple";
});

document.addEventListener("pointerleave", () => {
  header.style.backgroundColor = "orange";
});
