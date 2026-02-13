const howMuchBtn = document.getElementById("howMuchBtn");
const videoWrapper = document.getElementById("videoWrapper");
const video = document.getElementById("loveVideo");
const replayBtn = document.getElementById("replayBtn");

howMuchBtn.addEventListener("click", () => {
  navigator.vibrate(100);

  howMuchBtn.style.display = "none";
  document.querySelector(".question").style.display = "none";

  videoWrapper.style.display = "flex";

  video.play();


  if (video.requestFullscreen) {
  video.requestFullscreen();
} else if (video.webkitRequestFullscreen) { 
  video.webkitRequestFullscreen();
} else if (video.msRequestFullscreen) {
  video.msRequestFullscreen();
}

});


video.addEventListener("ended", () => {

  // Exit fullscreen properly
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) { 
    document.webkitExitFullscreen();
  }

  videoWrapper.style.display = "none";
  replayBtn.style.display = "inline-block";
  continueBtn.style.display = "inline-block";
});



continueBtn.addEventListener("click", () => {
  navigator.vibrate(100);
  window.location.href = "../journey3/journey3.html";
});

// Replay
replayBtn.addEventListener("click", () => {
  navigator.vibrate(100);
  video.currentTime = 0;
  videoWrapper.style.display = "flex";
  replayBtn.style.display = "none";
  video.play();
});
