console.log("SCRIPT FILE LOADED");
// ===============================
// BOOKING FORM + VALIDATION
// ===============================

const bookingForm = document.querySelector("#booking-form");
const formStatus = document.querySelector("#form-status");

console.log(bookingForm);
console.log(formStatus);

if (bookingForm && formStatus) {
  bookingForm.addEventListener("submit", function (event) {
    console.log("Form submitted");
    // Stop the demo form from refreshing the page

    event.preventDefault();

    // Read the booking details
    const name = bookingForm.elements["user_name"].value.trim();
    const phone = bookingForm.elements["user_phone"].value.trim();
    const email = bookingForm.elements["user_email"].value.trim();
    const service = bookingForm.elements["service"].value;
    const appointmentTime = bookingForm.elements["appointment_time"].value;
    const message = bookingForm.elements["message"].value;

    // Clear the previous status
    formStatus.textContent = "";

    // 1. Validate the name
    if (name === "") {
      formStatus.textContent = "Please enter your full name.";
      return;
    }

    // 2. Validate the phone number
    if (phone === "") {
      formStatus.textContent = "Please enter your phone number.";
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length < 9 || phoneDigits.length > 15) {
      formStatus.textContent = "Please enter a valid phone number.";
      return;
    }

    // 3. Validate the email
    if (email === "") {
      formStatus.textContent = "Please enter your email address.";
      return;
    }

    // 4. Validate the selected service
    if (service === "") {
      formStatus.textContent = "Please select a service.";
      return;
    }

    // 5. Validate the appointment date and time
    if (appointmentTime === "") {
      formStatus.textContent = "Please select your appointment date and time.";
      return;
    }

    if (new Date(appointmentTime).getTime() <= Date.now()) {
      formStatus.textContent = "Please choose a future appointment time.";
      return;
    }

    // All validation checks passed
    formStatus.style.color = "#0c9b79";
    formStatus.textContent =
      "Booking details validated successfully! (Demo only)";

    // Reset the form after successful validation
    bookingForm.reset();

    // Clear the success message after four seconds
    setTimeout(function () {
      formStatus.textContent = "";
    }, 4000);
  });
}

// ===============================
// REVEAL SECTIONS ON SCROLL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Reveal sections that are already visible when the page loads
revealOnScroll();

const messageInput = document.querySelector("#booking-message");
const messageCounter = document.querySelector("#message-counter");

if (messageInput && messageCounter) {
  messageInput.addEventListener("input", function updateMessageCounter() {
    console.log("Typing detected!");
    const characterCount = messageInput.value.length;
    messageCounter.textContent = `${characterCount}/500 characters`;
  });
}

console.log(document.querySelector("#booking-message"));
console.log(document.querySelector("#message-counter"));

//. TOGGLE THEME
const themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

//. Hamburger Menu
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

// Pricing Arrays and Objects
const services = [
  {
    name: "Haircut",
    price: 800,
    icon: "fa-scissors",
  },
  {
    name: "Beard Trim",
    price: 500,
    icon: "fa-user",
  },
  {
    name: "Full Grooming",
    price: 1000,
    icon: "fa-spa",
  },
];

const pricingGrid = document.querySelector(".pricing-grid");

services.forEach(function (service) {
  const card = document.createElement("article");

  card.classList.add("card");

  card.innerHTML = `
  <i class="fa-solid ${service.icon}"></i>
  <h3>${service.name}</h3>
  <p class="price">Ksh ${service.price}</p>
  <button class="book-service"
  type="button"
  data-service="${service.name}"> Book this service</button>`;

  pricingGrid.appendChild(card);
});

//Booking services
const bookingService = document.querySelector("#booking-service");

const bookButtons = document.querySelectorAll(".book-service");

bookButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedService = button.dataset.service;

    bookingService.value = selectedService;

    bookingService.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
