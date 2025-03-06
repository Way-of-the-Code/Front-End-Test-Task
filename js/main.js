let burgerIcon = document.getElementById("burgerIcon");
let mobileMenu = document.getElementById("mobileMenu");

burgerIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});
