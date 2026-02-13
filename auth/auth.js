// 👉 SET THE CORRECT DOB HERE (YYYY-MM-DD)
const CORRECT_DOB = "2020-02-14"; // change this

function checkDOB() {
  const input = document.getElementById("dob").value;
  const error = document.getElementById("error");
  const card = document.querySelector(".card");

  if (!input) {
    error.textContent = "Pick a date ❤️";
    return;
  }

  if (input === CORRECT_DOB) {
    if (navigator.vibrate) navigator.vibrate([100,50,100]);
    location.href = "../journey1/journey1.html";
  } else {
    if (navigator.vibrate) navigator.vibrate(200);
    error.textContent = "Hmm… that’s not right 😜";
    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 300);
  }
}
