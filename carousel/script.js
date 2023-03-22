const body = document.body;
const slides = document.querySelectorAll(".slide");
console.log(slides);
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlides = 0;
rightBtn.addEventListener("click", function () {
  activeSlides++;
  console.log(activeSlides);
  if (activeSlides.length > slides.length - 1) {
    activeSlides = 0;
  }
  setActiveSlide();
  setActiveBackground();
  slides[activeSlides].classList.add("active");
});

leftBtn.addEventListener("click", function () {
  activeSlides--;
  console.log(activeSlides);
  if (activeSlides < 0) {
    activeSlides = slides.length - 1;
  }
  setActiveSlide();
  setActiveBackground();
  slides[activeSlides].classList.add("active");
});

function setActiveSlide() {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
}

setActiveSlide();

function setActiveBackground() {
  body.style.backgroundImage = slides[activeSlides].style.backgroundImage;
}
setActiveBackground();
