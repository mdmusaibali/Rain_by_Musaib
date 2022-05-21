const audio = document.getElementById("audioplayer");
const range = document.querySelector(".range");
const audioIcon = document.querySelector(".icon-controls");
const controlButton = document.querySelector(".button-play-pause");
const spinner = document.querySelector(".spinner");

controlButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    audioIcon.setAttribute("name", "pause-outline");
  } else {
    audio.pause();
    audioIcon.setAttribute("name", "play-outline");
  }
});

range.addEventListener("mousemove", function (e) {
  audio.volume = e.target.value;
});

const removeSpinner = function () {
  spinner.style.display = "none";
};

console.log(document.readyState);
window.addEventListener("load", function () {
  removeSpinner();
  this.localStorage.setItem("isLoaded", "true");
});

const isLoaded = localStorage.getItem("isLoaded");
if (isLoaded === "true") {
  setTimeout(removeSpinner, 3000);
}
