const imagesContainerElement = document.querySelector(".img-container");
const images = document.querySelectorAll("img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const progressElements = document.querySelectorAll(".progress");

let index = 0;

let interval = setInterval(() => {
  index++;

  changeSlide();
}, 2000);

nextBtn.addEventListener("click", () => {
  index++;
  clearInterval(interval);
  changeSlide();
  interval = setInterval(() => {
    index++;

    changeSlide();
  }, 2000);
});

prevBtn.addEventListener("click", () => {
  index--;
  clearInterval(interval);
  changeSlide();
  interval = setInterval(() => {
    index++;

    changeSlide();
  }, 2000);
});

function changeSlide() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  progressElements.forEach((el) => {
    el.classList.remove("active");
  });
  progressElements[index].classList.add("active");
  imagesContainerElement.style.transform = `translateX(-${index * 500}px)`;
}
