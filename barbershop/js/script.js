document.getElementById("booking-form").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("form-status").innerText =
    "Demo booking form — backend not connected.";
});


let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(){
    testimonials.forEach(t=>t.style.display="none");
    index++;
    if(index > testimonials.length){ index = 1; }
    testimonials[index-1].style.display="block";
    setTimeout(showTestimonial, 4000);
}

showTestimonial();



function revealSections(){
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            section.classList.add("active");
        }
    });
}


  /*DOMCONTENTLOADED*/
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


document.addEventListener("DOMContentLoaded", function(){

    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const links = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");


const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
    }
});


    /* =========================
       HAMBURGER TOGGLE
    ========================= */
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    /* =========================
       AUTO CLOSE MOBILE MENU
    ========================= */
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    /* =========================
       SMOOTH SCROLL WITH OFFSET
    ========================= */
    links.forEach(anchor => {
        anchor.addEventListener("click", function(e){

            const targetId = this.getAttribute("href");

            if(!targetId.startsWith("#")) return;

            const targetSection = document.querySelector(targetId);
            if(!targetSection) return;

            e.preventDefault();

            const navbarHeight = navbar.offsetHeight;

            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight + 10,
                behavior: "smooth"
            });
        });
    });

    /* =========================
       NAVBAR SHRINK + SCROLLSPY
    ========================= */
    window.addEventListener("scroll", function(){

        /* Shrink effect */
        if(window.scrollY > 50){
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }

        /* ScrollSpy */
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if(pageYOffset >= sectionTop){
                current = section.getAttribute("id");
            }
        });

        links.forEach(a => {
            a.classList.remove("active");
            if(a.getAttribute("href") === "#" + current){
                a.classList.add("active");
            }
        });

    });

});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});
