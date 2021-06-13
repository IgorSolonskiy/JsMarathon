const container = document.querySelector(".container");
const slides = Array.from(document.querySelectorAll(".slide"));

container.addEventListener("click", (e) => {
  const slide = e.target.closest(".slide");

  if (!slide) return null;

  slides.forEach(slideElem => slideElem.classList.remove("active"));
  slide.classList.add("active");
});