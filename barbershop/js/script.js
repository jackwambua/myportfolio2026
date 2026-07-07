/* ==================================================
   ELITE BARBERSHOP
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ELEMENTS
  ========================= */

  const bookingForm = document.getElementById("booking-form");
  const formStatus = document.getElementById("form-status");

  const navbar = document.querySelector(".navbar");
  const header = document.querySelector(".header");

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  const themeToggle = document.getElementById("theme-toggle");
  const testimonials = document.querySelectorAll(".testimonial-card");



  /* =========================
     BOOKING FORM
  ========================= */

  if (bookingForm) {
    bookingForm.addEventListener("submit", e => {
      e.preventDefault();

      if (formStatus) {
        formStatus.textContent =
          "Demo booking form — backend not connected.";
      }
    });
  }



  /* =========================
     TESTIMONIAL SLIDER
  ========================= */

  if (testimonials.length) {

    let current = 0;

    function showSlide() {

      testimonials.forEach(card => card.style.display = "none");

      testimonials[current].style.display = "block";

      current = (current + 1) % testimonials.length;

    }

    showSlide();

    setInterval(showSlide, 4000);

  }



  /* =========================
     REVEAL ON SCROLL
  ========================= */

  function revealSections() {

    document.querySelectorAll(".fade-in").forEach(section => {

      if (section.getBoundingClientRect().top < window.innerHeight - 100) {

        section.classList.add("active");

      }

    });

  }

  revealSections();

  window.addEventListener("scroll", revealSections);



  /* =========================
     THEME
  ========================= */

  if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

      document.body.classList.add("light");
      themeToggle.textContent = "☀️";

    } else {

      themeToggle.textContent = "🌙";

    }

    themeToggle.addEventListener("click", () => {

      document.body.classList.toggle("light");

      const light = document.body.classList.contains("light");

      localStorage.setItem("theme", light ? "light" : "dark");

      themeToggle.textContent = light ? "☀️" : "🌙";

    });

  }



  /* =========================
     MOBILE MENU
  ========================= */

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      navLinks.classList.toggle("active");

      menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

    });

  }



  /* =========================
     NAVIGATION
  ========================= */

  links.forEach(link => {

    link.addEventListener("click", e => {

      const href = link.getAttribute("href");

      navLinks.classList.remove("active");

      if (menuToggle) menuToggle.textContent = "☰";

      if (!href.startsWith("#")) return;

      const target = document.querySelector(href);

      if (!target) return;

      e.preventDefault();

      window.scrollTo({

        top: target.offsetTop - navbar.offsetHeight,

        behavior: "smooth"

      });

    });

  });



  /* =========================
     CLOSE MENU OUTSIDE
  ========================= */

  document.addEventListener("click", e => {

    if (!navLinks || !menuToggle) return;

    if (
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {

      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";

    }

  });



  /* =========================
     SCROLL EFFECTS
  ========================= */

  function handleScroll() {

    if (window.scrollY > 60) {

      header?.classList.add("scrolled");
      navbar?.classList.add("scrolled");

    } else {

      header?.classList.remove("scrolled");
      navbar?.classList.remove("scrolled");

    }

    let currentSection = "";

    sections.forEach(section => {

      if (window.scrollY >= section.offsetTop - 120) {

        currentSection = section.id;

      }

    });

    links.forEach(link => {

      link.classList.toggle(
        "active-link",
        link.getAttribute("href") === "#" + currentSection
      );

    });

  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);

});