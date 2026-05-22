fetch("../assets/components/admin-navbar.html")

  .then(response => response.text())

  .then(data => {

    document.getElementById("navbar-container").innerHTML = data;

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });

      const navItems = document.querySelectorAll(".nav-links a");

      navItems.forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("show");
        });
      });

    }

  })

  .catch(error => console.log(error));