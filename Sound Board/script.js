const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const soundButton = document.createElement("button");
  soundButton.classList.add("btn");
  soundButton.textContent = sound;

  soundButton.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  document.querySelector(".buttons").appendChild(soundButton);
});

function stopSounds() {
  document.querySelectorAll("audio").forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}
