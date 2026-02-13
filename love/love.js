const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("touchstart", run);
noBtn.addEventListener("mouseover", run);

function run(e) {
  e.preventDefault();
  if (navigator.vibrate) navigator.vibrate(60);

  const area = document.querySelector(".buttons");
  const x = Math.random() * (area.clientWidth - noBtn.offsetWidth);
  const y = Math.random() * (area.clientHeight - noBtn.offsetHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function yes() {
  if (navigator.vibrate) navigator.vibrate([100,50,100]);
  location.href = "../thankyou/thankyou.html";
}
