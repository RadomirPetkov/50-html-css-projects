const toggleBtn = document.querySelector(".toggle");
const html = document.querySelector("html");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const timeEl = document.querySelector(".time");
const dayEl = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Thuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Noe",
  "Dec",
];

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
});

function updateTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const twelveHours = hour % 12;
  const day = date.getDay();
  const month = date.getMonth();
  const dayNum = date.getDate();
  
  hoursEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    twelveHours,
    0,
    60,
    0,
    360
  )}deg)`;
  minutesEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondsEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEl.textContent = `${hour}:${minutes < 10 ? "0" + minutes : minutes}`;
  dayEl.textContent = `${days[day]}, ${dayNum}, ${months[month]}`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

updateTime()

setInterval(updateTime, 1000);
