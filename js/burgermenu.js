const burgerIcon = document.querySelector(".burgerIcon");
const burgerLines = Array.from(document.querySelectorAll(".burgerIcon__line"));
const burgerNavbar = document.querySelector(".navbar_list");

burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle("clicked");
  burgerLines.forEach(function (element) {
    element.classList.toggle("clicked");
  });
  burgerNavbar.classList.toggle("clicked");
});
