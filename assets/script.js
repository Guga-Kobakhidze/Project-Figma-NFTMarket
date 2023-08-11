const slider = document.querySelector(".slider");
const leftHandle = document.querySelector(".left-handle");
const rightHandle = document.querySelector(".right-handle");

let sliderIndex = 0;
const cardWidth = 500;
const numCards = document.querySelectorAll(".carousel_card").length;

const updateSliderPosition = () => {
  slider.style.transform = `translateX(-${sliderIndex * cardWidth}px)`;
};

leftHandle.addEventListener("click", () => {
  if (sliderIndex == 0) {
    sliderIndex = (sliderIndex - 3 + numCards) % numCards;
  } else {
    sliderIndex = (sliderIndex - 1 + numCards) % numCards;
  }
  updateSliderPosition();
});

rightHandle.addEventListener("click", () => {
  sliderIndex = (sliderIndex + 1) % (numCards - 2);
  updateSliderPosition();
});
