
// Step 1: Select hamburger and nav-links

const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

console.log(hamburger, "...hamburger");

// Step 2: Add click event

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('fa-xmark');
    navLinks.classList.toggle('active');
});

// background color or scroll ::
// Scroll event window p hi run krta h


window.addEventListener("scroll", () => {
    let header = document.getElementById("Website-header");

    if (window.scrollY > 40) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})







