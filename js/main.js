document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-list li a");
    const sections = document.querySelectorAll(".section");

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - nav.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for section animations
    const options = {
        threshold: 0.25
    };

    const
