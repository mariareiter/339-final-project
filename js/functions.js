document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuBars = document.querySelector('.menu_bars');
    if (menuBars) {
        menuBars.addEventListener('click', function () {
            console.log("toggle menu icon on mobile");
            this.classList.toggle("change");

            const pages = document.querySelector(".nav_list");
            const socials = document.querySelector(".socials");
            const nav = document.querySelector("nav");
            const name = document.querySelector(".name");
            const main = document.querySelector("main");
            const footer = document.querySelector("footer");

            if (pages) pages.classList.toggle("change");
            if (socials) socials.classList.toggle("change");
            if (nav) nav.classList.toggle("change");
            if (name) name.classList.toggle("change");

            if (main && footer) {
                if (main.style.display !== "none") {
                    main.style.display = "none";
                    footer.style.display = "none";
                } else {
                    main.style.display = "block";
                    footer.style.display = "block";
                }
            }
        });
    }

    // Reduced Motion Check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        const lightboxLinks = document.querySelectorAll('[data-lightbox="gallery"]');
        lightboxLinks.forEach(link => {
            link.removeAttribute('data-lightbox');
            link.removeAttribute('href');
        });
    }

    // Image Error Handling
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function () {
            this.onerror = null;
            this.src = '../images/default-image.jpg';
            this.alt = "Image not available";

            const parentLink = this.closest('a[data-lightbox]');
            if (parentLink) {
                parentLink.removeAttribute('data-lightbox');
                parentLink.removeAttribute('data-title');
                parentLink.style.cursor = "default";
                parentLink.onclick = function (event) { event.preventDefault(); };
            }
        };
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        const body = document.body;

        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem("dark-mode");
        if (savedTheme === "enabled") {
            body.classList.add("dark-mode");
            darkModeToggle.textContent = "Disable Dark Mode";
        }

        // Toggle dark mode on button click
        darkModeToggle.addEventListener('click', () => {
            const isDarkMode = body.classList.toggle("dark-mode");
            if (isDarkMode) {
                localStorage.setItem("dark-mode", "enabled");
                darkModeToggle.textContent = "Disable Dark Mode";
            } else {
                localStorage.setItem("dark-mode", "disabled");
                darkModeToggle.textContent = "Enable Dark Mode";
            }
        });
    }
});
