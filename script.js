document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
  }

  if (slides.length > 1) {
    setInterval(showNextSlide, 5000);
  }

  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = mobileMenu.querySelectorAll("a");

  function openMenu() {
    mobileMenu.classList.add("open");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
