// script.js
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Disable Dark Mode";
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark-mode");
        if (isDarkMode) {
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.textContent = "Disable Dark Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            darkModeToggle.textContent = "Enable Dark Mode";
        }
    });
});

// Check for prefers-reduced-motion setting for reduced motion users!!!
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    // Disable lightbox functionality for reduced motion users
    const lightboxLinks = document.querySelectorAll('[data-lightbox="gallery"]');
    lightboxLinks.forEach(link => {
        link.removeAttribute('data-lightbox'); // Remove data-lightbox attribute to disable lightbox
        link.removeAttribute('href'); // Remove href attribute to disable link
    });
    
}

document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
    this.onerror = null; 
    this.src = '../images/default-image.jpg';
    this.alt = "Image not available";

        // Check if the parent link has lightbox attributes and remove them if this is a default image
        const parentLink = this.closest('a[data-lightbox]');
        if (parentLink) {
            parentLink.removeAttribute('data-lightbox');
            parentLink.removeAttribute('data-title');
            parentLink.style.cursor = "default"; // Optional: Change cursor to indicate no action
            parentLink.onclick = function(event) { event.preventDefault(); }; // Prevent default click action
        }
    };
});
