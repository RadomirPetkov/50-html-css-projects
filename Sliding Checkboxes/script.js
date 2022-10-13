const checkboxesElements = document.querySelectorAll(".checkbox");
const fastCheckbox = document.getElementById("fast");
const goodCheckbox = document.getElementById("good");
const cheapCheckbox = document.getElementById("cheap");

checkboxesElements.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => checkOthers(e.target));
});

function checkOthers(check) {
  if (fastCheckbox.checked && goodCheckbox.checked && cheapCheckbox.checked) {
    if (check.id == "fast") {
      goodCheckbox.checked = false;
    } else if (check.id == "good") {
      cheapCheckbox.checked = false;
    } else if (check.id == "cheap") {
      fastCheckbox.checked = false;
    }
  }
}
