const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-item");
const progressBar = document.getElementById("progress-bar");

/* ============================= */
/* SCROLL EFFECT + PROGRESS BAR */
/* ============================= */

window.addEventListener("scroll", function() {


  // Scroll Progress
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});

/* ============================= */
/* HAMBURGER TOGGLE */
/* ============================= */



/* CLOSE MENU WHEN LINK CLICKED */

navItems.forEach(item => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

/* ============================= */
/* ACTIVE LINK DETECTION */
/* ============================= */

let currentPage = window.location.pathname.split("/").pop();

if (currentPage === "") {
  currentPage = "index.html";
}

navItems.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});





/* ============================= */
/* DARK MODE TOGGLE */
/* ============================= */
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  // Check if dark mode was previously set in localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";  // Change the icon to Sun (indicating dark mode)
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "🌙";  // Moon icon as the default
  }

  // Add click event listener to toggle dark mode
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // Save theme preference in localStorage
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";  // Change the icon to Sun
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";  // Change icon back to Moon
    }
  });
});






/* ============================= */
/* COUNTER ANIMATION */
/* ============================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});


/* ============================= */
/* FAQ ACCORDION */
/* ============================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // Close other open items (professional behavior)
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");

  });
});























