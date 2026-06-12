const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {

if(navLinks.style.display === "flex"){

navLinks.style.display = "none";

}else{

navLinks.style.display = "flex";
navLinks.style.flexDirection = "column";

}

});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial() {
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[currentTestimonial].classList.add("active");

    currentTestimonial++;

    if(currentTestimonial >= testimonials.length){
        currentTestimonial = 0;
    }
}

showTestimonial();
setInterval(showTestimonial, 4000);

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});