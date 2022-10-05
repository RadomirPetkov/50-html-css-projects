const openBtnsElements = document.querySelectorAll(".faq-open");
const closeBtnsElements = document.querySelectorAll(".faq-close");

openBtnsElements.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.add("active");
  });
});

closeBtnsElements.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.classList.remove("active");
    });
  });