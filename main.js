//Burger Menu
const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector("ul.nav-links");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("collapse");
});
window.addEventListener("load", () => {
  const chat = document.querySelector(".icon-mail");
});
const requestTrials = document.querySelector("#requestTrial");
const contactNavLink = document.querySelector("#contactUs");
const requestTrialNow = document.querySelector("#request-trial-now");
const contactAdvisor = document.querySelector("#contact-advisor");

contactAdvisor.addEventListener("click", (e) => {
  e.preventDefault();
  chat.click();
});

contactNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  chat.click();
});

requestTrials.addEventListener("click", (e) => {
  e.preventDefault();
  chat.click();
});

requestTrialNow.addEventListener("click", (e) => {
  e.preventDefault();
  chat.clik();
});
