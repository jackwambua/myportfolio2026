/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.getElementById("booking-form");

if (bookingForm) {

  bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const formStatus = document.getElementById("form-status");

    if (formStatus) {
      formStatus.innerText =
        "Demo booking form — backend not connected.";
    }

  });

}


/* =========================
   TESTIMONIAL SLIDER
========================= */

let index = 0;

const testimonials = document.querySelectorAll(".testimonial-card");

function showTestimonial() {

  if (testimonials.length === 0) return;

  testimonials.forEach(t => {
    t.style.display = "none";
  });

  index++;

  if (index > testimonials.length) {
    index = 1;
  }

  testimonials[index - 1].style.display = "block";

  setTimeout(showTestimonial, 4000);

}

showTestimonial();


/* =========================
   REVEAL ANIMATION
========================= */

function revealSections() {

  const reveals = document.querySelectorAll(".fade-in");

  reveals.forEach(section => {

    const windowHeight = window.innerHeight;

    const revealTop = section.getBoundingClientRect().top;

    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {

      section.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);


/* =========================
   DOM CONTENT LOADED
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ELEMENTS
  ========================= */

  const navbar = document.querySelector(".navbar");

  const menuToggle = document.getElementById("menu-toggle");

  const navLinks = document.getElementById("nav-links");

  const links = document.querySelectorAll(".nav-links a");

  const sections = document.querySelectorAll("section");

  const themeToggle = document.getElementById("theme-toggle");


  /* =========================
     THEME LOAD
  ========================= */

  if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    if (themeToggle) {
      themeToggle.textContent = "☀️";
    }

  }


  /* =========================
     THEME TOGGLE
  ========================= */

  if (themeToggle) {

    themeToggle.addEventListener("click", () => {

      document.body.classList.toggle("light");

      if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "☀️";

      } else {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "🌙";

      }

    });

  }


  /* =========================
     MOBILE NAVBAR TOGGLE
  ========================= */

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      navLinks.classList.toggle("active");

    });

  }


  /* =========================
     CLOSE MOBILE MENU
  ========================= */

  links.forEach(link => {

    link.addEventListener("click", () => {

      if (navLinks) {
        navLinks.classList.remove("active");
      }

    });

  });


  /* =========================
     SMOOTH SCROLL
  ========================= */

  links.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      if (!targetId.startsWith("#")) return;

      const targetSection = document.querySelector(targetId);

      if (!targetSection) return;

      e.preventDefault();

      const navbarHeight = navbar.offsetHeight;

      window.scrollTo({

        top: targetSection.offsetTop - navbarHeight + 10,

        behavior: "smooth"

      });

    });

  });


  /* =========================
     NAVBAR SCROLL EFFECT
  ========================= */

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

      navbar.classList.add("scrolled");

      navbar.style.background = "#000";

      navbar.style.padding = "14px 8%";

    } else {

      navbar.classList.remove("scrolled");

      navbar.style.background = "#111";

      navbar.style.padding = "18px 8%";

    }

  });


  /* =========================
     SCROLLSPY
  ========================= */

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 120;

      if (pageYOffset >= sectionTop) {

        current = section.getAttribute("id");

      }

    });

    links.forEach(a => {

      a.classList.remove("active");

      if (a.getAttribute("href") === "#" + current) {

        a.classList.add("active");

      }

    });

  });

});