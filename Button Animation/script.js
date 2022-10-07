const buttonElement = document.querySelector(".btn");
const main = document.querySelector(".main");

buttonElement.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const yInside = y - buttonTop;
  const xInside = x - buttonLeft;

  const newElement = document.createElement("span");
  newElement.classList.add("circle");

  newElement.style.top = yInside + "px";
  newElement.style.left = xInside + "px";
  buttonElement.appendChild(newElement);

  setTimeout(() => {
    newElement.remove();
  }, 300);
});
