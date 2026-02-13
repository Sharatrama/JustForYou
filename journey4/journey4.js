// const playBtn = document.getElementById("playBtn");
// const videoWrapper = document.getElementById("videoWrapper");
// const video = document.getElementById("journeyVideo");
// const continueBtn = document.getElementById("continueBtn");

// playBtn.addEventListener("click", () => {
//   navigator.vibrate(100);

//   playBtn.style.display = "none";
//   document.querySelector(".title").style.display = "none";
//   document.querySelector(".subtitle").style.display = "none";

//   videoWrapper.style.display = "flex";
//   video.play();

//   if (video.requestFullscreen) {
//     video.requestFullscreen();
//   }
// });

// video.addEventListener("ended", () => {

//   if (document.fullscreenElement) {
//     document.exitFullscreen();
//   }

//   videoWrapper.style.display = "none";
//   continueBtn.style.display = "inline-block";
// });

// continueBtn.addEventListener("click", () => {
//   navigator.vibrate(100);
//   window.location.href = "../journey5/journey5.html";
// });


// // Replay video
// replayBtn.addEventListener("click", () => {
//   navigator.vibrate(100);

//   replayBtn.style.display = "none";
//   continueBtn.style.display = "none";

//   video.currentTime = 0;
//   videoWrapper.style.display = "flex";
//   video.play();

//   if (video.requestFullscreen) {
//     video.requestFullscreen();
//   }
// });


const playBtn = document.getElementById("playBtn");
const videoWrapper = document.getElementById("videoWrapper");
const video = document.getElementById("journeyVideo");
const continueBtn = document.getElementById("continueBtn");
const replayBtn = document.getElementById("replayBtn");

playBtn.addEventListener("click", () => {
  navigator.vibrate(100);

  playBtn.style.display = "none";
  document.querySelector(".title").style.display = "none";
  document.querySelector(".subtitle").style.display = "none";

  videoWrapper.style.display = "flex";
  video.play();

  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});

// When video ends
video.addEventListener("ended", () => {

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  }

  videoWrapper.style.display = "none";
  replayBtn.style.display = "inline-block";
  continueBtn.style.display = "inline-block";
});

// Replay video
replayBtn.addEventListener("click", () => {
  navigator.vibrate(100);

  replayBtn.style.display = "none";
  continueBtn.style.display = "none";

  video.currentTime = 0;
  videoWrapper.style.display = "flex";
  video.play();

  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
});

// Continue to next page
continueBtn.addEventListener("click", () => {
  navigator.vibrate(100);
  window.location.href = "../journey5/journey5.html";
});
