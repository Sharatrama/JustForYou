// Typing effect
const text = "6 years of togetherness, Thankyou Muddu for being with me❤️";
const typeText = document.getElementById("typeText");

let i = 0;

function typing() {
  if (i < text.length) {
    typeText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();

// Floating hearts
const heartsContainer = document.getElementById("hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 500);

// Final button action
document.getElementById("finalBtn").addEventListener("click", () => {
  navigator.vibrate(200);
  launchConfetti();
});



function launchConfetti() {

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.transform = "translate(-50%, -50%)";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 300 + 100;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    heart.animate([
      { transform: "translate(-50%, -50%)", opacity: 1 },
      { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
    ], {
      duration: 2000,
      easing: "ease-out"
    });

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}

