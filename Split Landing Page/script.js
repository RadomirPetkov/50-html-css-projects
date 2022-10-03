const leftElement = document.querySelector(".left");
const rightElement = document.querySelector(".right");
const containerElement = document.querySelector(".container");

leftElement.addEventListener("mouseenter", () => {
  containerElement.classList.add("show-left");
});

leftElement.addEventListener("mouseleave", () => {
  containerElement.classList.remove("show-left");
});

rightElement.addEventListener("mouseenter", () => {
    containerElement.classList.add("show-right");
  });
  
  rightElement.addEventListener("mouseleave", () => {
    containerElement.classList.remove("show-right");
  });
  