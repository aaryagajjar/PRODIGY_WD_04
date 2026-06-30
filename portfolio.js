// Change navbar style on scroll
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});

// Close menu when clicking on a link
navLinks.addEventListener("click", function(e) {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("active");
  }
});

// Optional: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
