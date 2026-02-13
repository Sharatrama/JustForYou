function openLove() {
  if (navigator.vibrate) navigator.vibrate(80);
  location.href = "love/love.html";
}

// floating hearts
const hearts = document.querySelector(".hearts");
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = Math.random() * 20 + 15 + "px";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 400);
