const container = document.querySelector(".container");
const SQUARES = 500;
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

for (let index = 0; index < SQUARES; index++) {
  const newEl = document.createElement("div");
  newEl.addEventListener("mouseover", (e) => addColor(e.target));
  newEl.addEventListener("mouseout", (e) => removeColor(e.target));
  newEl.classList.add("square");
  container.appendChild(newEl);
}

function addColor(element) {
  element.style.background = `${
    colors[Math.floor(Math.random() * colors.length)]
  }`;
}

function removeColor(element) {
  element.style.background = "";
}
