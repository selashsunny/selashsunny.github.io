/* MATRIX */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const chars = "01@#$%";
const drops = Array(Math.floor(innerWidth / 14)).fill(1);

setInterval(() => {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#00ff00";
  ctx.font = "14px monospace";
  drops.forEach((y,i)=>{
    ctx.fillText(chars[Math.random()*chars.length|0], i*14, y*14);
    drops[i] = y*14 > canvas.height && Math.random() > .95 ? 0 : y+1;
  });
}, 33);

/* TERMINAL COMMANDS */
const input = document.getElementById("commandInput");
const output = document.getElementById("terminal-output");

const commands = {
  help: "whoami | skills | contact | clear",
  whoami: "Selash Sunny — Certified Ethical Hacker",
  skills: "Penetration Testing, Network Security, Python",
  contact: "Email: selashsunny@gmail.com"
};

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    output.innerHTML += `<p>> ${cmd}</p>`;
    output.innerHTML += `<p>${commands[cmd] || "command not found"}</p>`;
    if (cmd === "clear") output.innerHTML = "";
    input.value = "";
  }
});

/* THEME TOGGLE */
document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("light");

/* GSAP */
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    scrollTrigger: { trigger: el, start: "top 80%" }
  });
});

/* SKILLS */
document.querySelectorAll(".bar div").forEach(bar =>
  gsap.to(bar, {
    width: bar.dataset.level + "%",
    scrollTrigger: { trigger: bar }
  })
);
