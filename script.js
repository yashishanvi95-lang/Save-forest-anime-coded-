
const plantBtn = document.getElementById("plantBtn");
const pledgeBtn = document.getElementById("pledgeBtn");

const treeCountElement = document.getElementById("treeCount");
const pledgeCountElement = document.getElementById("pledgeCount");
const message = document.getElementById("message");

let trees = 0;
let pledges = 0;

document.getElementById("year").textContent =
  new Date().getFullYear();

function updateCounter(element, value) {
  element.textContent = String(value).padStart(3, "0");
}

plantBtn.addEventListener("click", () => {
  trees++;

  updateCounter(treeCountElement, trees);

  message.textContent =
    "🌱 GREEN POWER AWAKENED! Your virtual tree has been added.";

  plantBtn.textContent = "🌿 PLANT ANOTHER TREE";

  plantBtn.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.06)" },
      { transform: "scale(1)" }
    ],
    { duration: 300 }
  );
});

pledgeBtn.addEventListener("click", () => {
  pledges++;

  updateCounter(pledgeCountElement, pledges);

  message.textContent =
    "💚 PLEDGE ACCEPTED! Protect nature in your everyday life.";

  pledgeBtn.textContent = "✓ PLEDGE TAKEN";
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Reveal cards when they enter the screen
const revealItems = document.querySelectorAll(
  ".card, .threat, .impact"
);

revealItems.forEach(item => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

// Neon cursor glow on devices with a mouse
const glow = document.getElementById("cursorGlow");

if (glow && window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("pointermove", event => {
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
  });
}
