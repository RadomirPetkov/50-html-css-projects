const resetBtn = document.getElementById("reset");
const nums = document.querySelectorAll(".nums span");
const counterElement = document.querySelector(".counter");
const finalElement = document.querySelector(".final");
const goElement = document.querySelector(".go");

nums.forEach((num) => {
  num.addEventListener("animationend", (e) => setNext(e));
});

function setNext(e) {
  let currentElement = e.target;
  currentElement.classList.remove("in");
  if (currentElement.nextElementSibling) {
    currentElement.nextElementSibling.classList.add("in");
  } else {
    counterElement.classList.remove("show");
    finalElement.classList.add("show");
    goElement.style.animation = "go 0.5s ease";
  }
}

resetBtn.addEventListener("click", reset);

function reset() {
  goElement.style.animation = "";
  counterElement.classList.add("show");
  finalElement.classList.remove("show");
  nums[0].classList.add("in");
}
