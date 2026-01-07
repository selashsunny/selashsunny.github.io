/* GSAP Setup */
gsap.registerPlugin(ScrollTrigger);

/* Scroll Progress Bar */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});

/* Hero Parallax */
gsap.to(".hero", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
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

/* Skill Bar Animation */
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

/* Section Fade-in */
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

/* Card Hover Glow (Security Theme) */
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
