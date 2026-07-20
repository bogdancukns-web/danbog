document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector("footer p");

  if (yearElement) {
    const currentYear = new Date().getFullYear();

    yearElement.textContent =
      `© ${currentYear} Danbog Mobile Bar & Cocktail Catering`;
  }
});
