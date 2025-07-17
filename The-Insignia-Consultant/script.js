
// Step 1: Select hamburger and nav-links

const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

console.log(hamburger, "...hamburger");

// Step 2: Add click event

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('fa-xmark');
    navLinks.classList.toggle('active');
});
