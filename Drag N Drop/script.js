const boxes = document.querySelectorAll(".box");
const img = document.querySelector(".fill");

img.addEventListener("dragstart", dragStart);
img.addEventListener("dragend", dragEnd);

boxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
});

function dragStart() {
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";

}
function dragLeave() {
  this.className = "box";

}

function dragDrop() {
  this.className = "box";
  this.appendChild(img);
}
