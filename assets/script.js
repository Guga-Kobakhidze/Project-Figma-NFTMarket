// for slider 1 ---> //

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


// for slider 2 ---> //

const slider2 = document.querySelector(".slider2");
const leftHandle2 = document.querySelector(".left-handle2");
const rightHandle2 = document.querySelector(".right-handle2");

let sliderIndex2 = 0;
const cardWidth2 = 500;
const numCards2 = document.querySelectorAll(".carousel_card2").length;

const updateSlider2Position = () => {
  slider2.style.transform = `translateX(-${sliderIndex2 * cardWidth}px)`;
};

leftHandle2.addEventListener("click", () => {
  if (sliderIndex2 == 0) {
    sliderIndex2 = (sliderIndex2 - 3 + numCards) % numCards;
  } else {
    sliderIndex2 = (sliderIndex2 - 1 + numCards) % numCards;
  }
  updateSlider2Position();
});

rightHandle2.addEventListener("click", () => {
  sliderIndex2 = (sliderIndex2 + 1) % (numCards - 2);
  updateSlider2Position();
});


// for slider 3 ---> //

const slider3 = document.querySelector(".slider3");
const leftHandle3 = document.querySelector(".left-handle3");
const rightHandle3 = document.querySelector(".right-handle3");

let sliderIndex3 = 0;
const cardWidth3 = 640;
const numCards3 = document.querySelectorAll(".carousel_card3").length;

const updateSlider3Position = () => {
  slider3.style.transform = `translateX(-${sliderIndex3 * cardWidth3}px)`;
};

leftHandle3.addEventListener("click", () => {
  if (sliderIndex3 == 0) {
    sliderIndex3 = (sliderIndex3 - 2 + numCards) % numCards;
  } else {
    sliderIndex3 = (sliderIndex3 - 1 + numCards) % numCards;
  }
  updateSlider3Position();
});

rightHandle3.addEventListener("click", () => {
  sliderIndex3 = (sliderIndex3 + 1) % (numCards - 1);
  updateSlider3Position();
});