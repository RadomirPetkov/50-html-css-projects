const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");

let speed = 300 / speedElement.value;
let text = "We love programming!";
let indx = 1;

function writeText() {
  textElement.innerText = text.slice(0, indx++);

  if (indx == text.length) {
    setTimeout(() => {
      indx = 1;
    }, 1000);
  }
  setTimeout(writeText, speed);
}

writeText();

speedElement.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
