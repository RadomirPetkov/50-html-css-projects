const addNewChoiceBtn = document.querySelector(`.add-choice`);
const choicesElement = document.querySelector(".choices");
const goBtn = document.querySelector(".spin");

addNewChoiceBtn.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  const newInput = document.createElement("input");

  newInput.classList.add("choice-input");
  newDiv.appendChild(newInput);
  newDiv.classList.add("choice");
  choicesElement.appendChild(newDiv);
  newInput.focus();
});

goBtn.addEventListener("click", () => {
  let currentTime = 0;
  const interval = setInterval(() => {
    goBtn.setAttribute("disabled", "true")
    spin(currentTime);
    currentTime++;
    if (currentTime > 20) {
      clearInterval(interval);
      lastPick();
    goBtn.removeAttribute("disabled")

    }
  }, 100);
});

function lastPick() {
  const inputChoicesElements = document.querySelectorAll(".choice-input");

  removePickers();
  const random = randomPick(inputChoicesElements);

  const pickedElement = document.createElement("i");
  pickedElement.classList.add("fas", "fa-solid", "fa-circle-check", "picked");
  random.parentElement.appendChild(pickedElement);
  random.classList.add("selected");
}

function removePickers() {
  const choicesElements = document.querySelectorAll(".choice");

  choicesElements.forEach((choice) => {
    const currentChoice = choice.querySelector("input");
    currentChoice.classList.remove("selected");
    const currentIcon = choice.querySelector("i");
    if (currentIcon != null) {
      choice.removeChild(currentIcon);
    }
  });
}

function spin(currentTime) {
  const inputChoicesElements = document.querySelectorAll(".choice-input");
  removePickers();
  const random = randomPick(inputChoicesElements);
  const pickedElement = document.createElement("i");
  pickedElement.classList.add(
    "fas",
    "fa-regular",
    "fa-hand-point-left",
    "picker"
  );
  random.parentElement.appendChild(pickedElement);
}

function randomPick(array) {
  const random = array[Math.floor(Math.random() * array.length)];
  return random;
}
