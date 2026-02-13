
function auth(){
  if (navigator.vibrate) navigator.vibrate([100,50,100]);
  location.href = "../auth/auth.html";
}

const heartContainer = document.getElementById("floating-hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Different heart styles
  const hearts = ["❤️", "💖", "💕", "💘"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.fontSize = 16 + Math.random() * 14 + "px";

  heartContainer.appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 300);
