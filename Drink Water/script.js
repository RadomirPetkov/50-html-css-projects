const liters = document.getElementById("liters");
const percentageElement = document.getElementById("percentage");
const remaining = document.querySelector(".remaining");
const setGoalBtn = document.getElementById("setGoal");
const targetElement = document.getElementById("target");
const cupsElement = document.querySelector(".cups");

setGoalBtn.addEventListener("click", setNewGoal);

targetElement.focus()

function setNewGoal() {
  targetElement.toggleAttribute("disabled");
  targetElement.focus();
  if (targetElement.hasAttribute("disabled")) {
    createCups();
    updateBigCup();
  }
}

function fillcups(idx) {
  const smallCups = document.querySelectorAll(".small-cup");

  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling?.classList.contains("full")
  ) {
    smallCups[idx].classList.remove("full");
  } else {
    smallCups.forEach((cup, idx2) => {
      if (idx2 <= idx) {
        cup.classList.add("full");
      } else {
        cup.classList.remove("full");
      }
    });
  }
}

function updateBigCup() {
  const smallCups = document.querySelectorAll(".small-cup");

  let target = Number(targetElement.value);
  if (target == "") {
    target = 0;
  }
  const filledCups = document.querySelectorAll(".small-cup.full").length;
  let cups = smallCups.length;
  if (cups == 0) {
    cups = 1;
  }
  let percentageFill = (filledCups / cups) * 100;

  percentageElement.style.height = `${percentageFill}%`;
  percentageElement.style.visibility = "visible";
  percentageElement.textContent = `${Math.round(percentageFill)}%`;

  liters.textContent = `${target - (filledCups / cups) * target} L`;

  if (filledCups == smallCups.length) {
    remaining.style.height = "0";
  }
}

function createCups() {
  cupsElement.innerHTML = "";
  const target = Number(targetElement.value);
  for (let index = 0; index < target * 4; index++) {
    const newCupElement = document.createElement("div");
    newCupElement.classList.add("cup", "small-cup");
    newCupElement.textContent = "250ml";
    cupsElement.appendChild(newCupElement);
  }
  const smallCups = document.querySelectorAll(".small-cup");
  smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => {
      fillcups(idx);
      updateBigCup();
    });
  });
}

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && !targetElement.hasAttribute("disabled")) {
    setNewGoal();
  }
});
