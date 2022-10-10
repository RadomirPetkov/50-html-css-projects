const canvas = document.getElementById("canvas");
const increaseElement = document.getElementById("increase");
const decreaseElement = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearElement = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 12;
let x;
let color = "black";
let y;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

//Edit toolbox

increaseElement.addEventListener("click", () => {
  size += 3;
  if (size > 30) {
    size = 30;
  }
  updateSizeOnScreen();
});

decreaseElement.addEventListener("click", () => {
  size -= 3;
  if (size < 3) {
    size = 3;
  }
  updateSizeOnScreen();
});

colorElement.addEventListener("change", (e) => {
  color = e.target.value;
});

clearElement.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.clientHeight, canvas.width);
});

function updateSizeOnScreen() {
  sizeElement.textContent = size;
}

updateSizeOnScreen();
