const PASSWORD = "112925";

const lockScreen = document.getElementById("lockScreen");
const mainScreen = document.getElementById("mainScreen");
const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

function unlock() {
  if (passwordInput.value === PASSWORD) {
    lockScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
    window.scrollTo(0, 0);
    for (let i = 0; i < 12; i++) setTimeout(createHeart, i * 120);
  } else {
    error.textContent = "Not quite, my love. Try again. 💜";
    passwordInput.value = "";
    passwordInput.focus();
  }
}

unlockBtn.addEventListener("click", unlock);
passwordInput.addEventListener("keydown", e => {
  if (e.key === "Enter") unlock();
});
setInterval(() => {
  if (!mainScreen.classList.contains("hidden") && Math.random() > .55) createHeart();
}, 1600);
