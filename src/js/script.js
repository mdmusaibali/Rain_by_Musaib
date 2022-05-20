const audio = document.getElementById("audioplayer");
const range = document.querySelector(".range");
const audioIcon = document.querySelector(".icon-controls");
const controlButton = document.querySelector(".button-play-pause");

controlButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    audioIcon.setAttribute("name", "pause-outline");
  } else {
    audio.pause();
    audioIcon.setAttribute("name", "play-outline");
  }
});

// range.addEventListener("mousemove", function (e) {
//   audio.volume = e.target.value;
// });

["mousemove", "change"].forEach((events) => {
  range.addEventListener(events, function (e) {
    audio.volume = e.target.value;
  });
});
