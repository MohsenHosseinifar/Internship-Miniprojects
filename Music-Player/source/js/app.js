let $ = document;
let music = $.querySelectorAll(".fa-play");
let audio = $.querySelectorAll("audio");

let targetmusic;
music.forEach(function (musicForeach) {
  musicForeach.addEventListener("click", function (event) {
    targetmusic = event.target.dataset.name;
    audio.forEach(function (audio) {
      audio.play();
      if (audio.dataset.name === targetmusic) {
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  });
});
