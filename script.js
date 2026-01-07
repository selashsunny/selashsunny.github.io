gsap.registerPlugin(ScrollTrigger);

/* Scroll Progress */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    document.getElementById("progress-bar").style.width =
        (scrollTop / height) * 100 + "%";
});

/* Typing Effect */
const text = "Cyber Security | Ethical Hacker | Network Engineer";
let i = 0;
const typing = document.getElementById("typing-text");

function typeEffect() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

/* Skill Bars */
document.querySelectorAll(".skill-bar div").forEach(bar => {
    gsap.to(bar, {
        width: bar.dataset.skill + "%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: bar,
            start: "top 80%"
        }
    });
});

/* Section Animation */
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 85%"
        }
    });
});

/* Card Glow */
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            boxShadow: "0 0 20px #00ffcc",
            duration: 0.3
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            boxShadow: "0 0 0 transparent",
            duration: 0.3
        });
    });
});
