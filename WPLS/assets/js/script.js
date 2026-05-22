// ===============================
// MOBILE NAVIGATION TOGGLE
// ===============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // CLOSE MENU WHEN LINK CLICKED
  const navItems = document.querySelectorAll(".nav-links a");

  navItems.forEach(link => {

    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });

  });

}


// ===============================
// STICKY HEADER SHADOW ON SCROLL
// ===============================

const header = document.querySelector(".header");

if (header) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

      header.style.boxShadow =
        "0 4px 15px rgba(0,0,0,0.1)";

    } else {

      header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.05)";

    }

  });

}


// ===============================
// SIMPLE FADE-IN ANIMATION
// ===============================

const cards = document.querySelectorAll(".feature-card");

const revealCards = () => {

  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {

    const cardTop =
      card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }

  });

};


// INITIAL CARD STYLES

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";

});


// RUN ANIMATION

window.addEventListener("scroll", revealCards);

revealCards();