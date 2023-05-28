// CLICKABLES
const aboutBtn = document.querySelector(".about_btn");
const mainSymbol = document.querySelector(".main_symbol");
const circleSymbol = document.querySelector(".circle_symbol");
const davidStarSymbol = document.querySelector(".david-star_symbol");
const hankCrossSymbol = document.querySelector(".hank-cross_symbol");
const svastikaSymbol = document.querySelector(".svastika_symbol");
const aumSymbol = document.querySelector(".aum_symbol");

// MODALS
const allModals = Array.from(document.querySelectorAll(".modal"));
const allCloseIcons = Array.from(document.querySelectorAll(".close_icon"));
const overlay = document.querySelector(".overlay");
const aboutModal = document.querySelector(".about_modal");

// FUNCTIONS

function closeModals() {
  allModals.forEach((element) => element.classList.remove("visible"));
  overlay.classList.remove("visible");
}

// CLOSE-EVENTS
overlay.addEventListener("click", function () {
  closeModals();
});
allCloseIcons.forEach((element) =>
  element.addEventListener("click", function () {
    closeModals();
  })
);

// CLICK-EVENTS
aboutBtn.addEventListener("click", function () {
  console.log("aboutBtn");
  aboutModal.classList.add("visible");
  overlay.classList.add("visible");
});
mainSymbol.addEventListener("click", function () {
  console.log("mainSymbol");
});
circleSymbol.addEventListener("click", function () {
  console.log("circleSymbol");
});
davidStarSymbol.addEventListener("click", function () {
  console.log("davidStarSymbol");
});
hankCrossSymbol.addEventListener("click", function () {
  console.log("hankCrossSymbol");
});
svastikaSymbol.addEventListener("click", function () {
  console.log("svastikaSymbol");
});
aumSymbol.addEventListener("click", function () {
  console.log("aumSymbol");
});
