// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link
document.querySelectorAll("nav ul a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// =========================
// TESTIMONIAL SLIDER
// =========================

let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {
  function showTestimonial() {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active");
    });

    testimonials[currentTestimonial].classList.add("active");

    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }

  showTestimonial();
  setInterval(showTestimonial, 4000);
}
