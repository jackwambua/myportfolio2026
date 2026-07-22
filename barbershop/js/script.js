// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
  themeToggle.setAttribute("aria-pressed", "true");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const darkMode = document.body.classList.contains("dark-mode");

  themeIcon.classList.toggle("fa-moon", !darkMode);
  themeIcon.classList.toggle("fa-sun", darkMode);

  themeToggle.setAttribute("aria-pressed", darkMode);

  localStorage.setItem("theme", darkMode ? "dark" : "light");
});

// ===============================
// REVEAL ON SCROLL
// ===============================

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

reveals.forEach((section) => {
  revealObserver.observe(section);
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// ===============================
// HEADER SHADOW ON SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ===============================
// BOOKING FORM DEMO
// ===============================

const bookingForm = document.getElementById("booking-form");
const formStatus = document.getElementById("form-status");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formStatus.style.color = "#c59d5f";
  formStatus.textContent = "Booking request sent successfully!";

  bookingForm.reset();

  setTimeout(() => {
    formStatus.textContent = "";
  }, 4000);
});
