/* TERMINAL TRANSITION */
setTimeout(() => {
  document.getElementById("terminal").style.display = "none";
  document.getElementById("site").classList.remove("hidden");
}, 4500);

/* MATRIX RAIN */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.98) drops[i] = 0;
    drops[i]++;
  });
}

setInterval(drawMatrix, 35);

/* SKILL BAR ANIMATION */
document.querySelectorAll(".bar div").forEach(bar => {
  const level = bar.dataset.level;
  setTimeout(() => bar.style.width = level + "%", 800);
});
