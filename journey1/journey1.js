/* -----------------------
   Typewriter Effect
------------------------ */

const text = "This is where our beautiful journey begins ❤️";
let index = 0;
const speed = 50;
const typeTarget = document.getElementById("typeText");

function typeWriter() {
  if (index < text.length) {
    typeTarget.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();


/* -----------------------
   Scroll Reveal
------------------------ */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


/* -----------------------
   Floating Hearts
------------------------ */

const heartContainer = document.getElementById("hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const hearts = ["❤️", "💖", "💕"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 16 + "px";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 600);


// Show continue button when last section appears
const continueSection = document.querySelector(".continue-section");

const continueObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      continueSection.classList.add("show");
    }
  });
});

continueObserver.observe(continueSection);

// Button click action
document.getElementById("continueBtn").addEventListener("click", () => {
  navigator.vibrate(100);
  window.location.href = "../journey2/journey2.html";
});
