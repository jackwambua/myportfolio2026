/* =========================
   FADE IN ANIMATION
========================= */

const faders = document.querySelectorAll(".fade-in");

faders.forEach((fader) => {
  fader.classList.add("hidden");
});

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

/* =========================
   TOGGLE DARK MODE
========================= */

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href.startsWith("#") && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

/* =========================
   INTERACTIVE HERO TYPING EFFECT
========================= */

const texts = [
  "Web Designer",
  "Frontend Developer",
  "Responsive Websites",
  "Portfolio Websites",
  "Business Websites",
  "Landing Pages",
  "Web Redesigns",

];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;

  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 1200);
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

if (typingElement) {
  typeEffect();
}

/* =========================
   SKILLS PROGRESS ANIMATION
========================= */

const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

if (skillSection) {
  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        progressBars.forEach((bar) => {
          bar.style.width = bar.getAttribute("data-width");
        });

        observer.unobserve(skillSection);
      });
    },
    { threshold: 0.3 },
  );

  skillObserver.observe(skillSection);
}


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

  hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Update accessibility state
    const expanded = hamburger.classList.contains("active");
    hamburger.setAttribute("aria-expanded", expanded);

  });

  // Close mobile menu when a nav link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

      hamburger.classList.remove("active");
      navLinks.classList.remove("active");

      // Reset accessibility state
      hamburger.setAttribute("aria-expanded", "false");

    });

  });

}

/* ===================
   FOOTER YEAR UPDATE 
   ==================== */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}



/*BACK TO TOP BUTTON*/
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});