const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  let inputLength = e.target.value.length;
  background.style.filter = `blur(${20 - inputLength * 4}px)`;
});
