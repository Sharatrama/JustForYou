// Reveal animation on scroll
const memories = document.querySelectorAll(".memory");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
    }
  });
});

memories.forEach(memory => {
  observer.observe(memory);
});

// Continue button
document.getElementById("continueBtn").addEventListener("click", () => {
  navigator.vibrate(100);
  window.location.href = "../journey4/journey4.html";
});
