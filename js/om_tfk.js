// CLICKABLES
const aboutBtn = document.querySelector(".about_btn");
const mainSymbol = document.querySelector(".main_symbol");
const circleSymbol = document.querySelector(".circle_symbol");
const davidStarSymbol = document.querySelector(".david-star_symbol");
const hankCrossSymbol = document.querySelector(".hank-cross_symbol");
const svastikaSymbol = document.querySelector(".svastika_symbol");
const aumSymbol = document.querySelector(".aum_symbol");

// MODALS - GENERAL
const allModals = Array.from(document.querySelectorAll(".modal"));
const allCloseIcons = Array.from(document.querySelectorAll(".close_icon"));
const overlay = document.querySelector(".overlay");
// MODAL - INDIVIDUAL
const aboutModal = document.querySelector(".about_modal");
const mainSymbolModal = document.querySelector(".main-symbol_modal");
const circleModal = document.querySelector(".circle_modal");
const davidStarModal = document.querySelector(".david-star_modal");
const hankCrossModal = document.querySelector(".hank-cross_modal");
const svastikaModal = document.querySelector(".svastika_modal");
const aumModal = document.querySelector(".aum_modal");

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
  aboutModal.classList.add("visible");
  overlay.classList.add("visible");
});
mainSymbol.addEventListener("click", function () {
  mainSymbolModal.classList.add("visible");
  overlay.classList.add("visible");
});
circleSymbol.addEventListener("click", function () {
  circleModal.classList.add("visible");
  overlay.classList.add("visible");
});
davidStarSymbol.addEventListener("click", function () {
  davidStarModal.classList.add("visible");
  overlay.classList.add("visible");
});
hankCrossSymbol.addEventListener("click", function () {
  hankCrossModal.classList.add("visible");
  overlay.classList.add("visible");
});
svastikaSymbol.addEventListener("click", function () {
  svastikaModal.classList.add("visible");
  overlay.classList.add("visible");
});
aumSymbol.addEventListener("click", function () {
  aumModal.classList.add("visible");
  overlay.classList.add("visible");
});

// EVENTS-BUTTON

const eventsBtn = document.querySelector(".cta_banner_btn");

eventsBtn.addEventListener("click", function () {
  console.log("eventsBtn");
  window.location.href = "besoeg_os.html";
});
