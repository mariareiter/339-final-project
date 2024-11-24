document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuBars = document.querySelector('.menu_bars');
    if (menuBars) {
        menuBars.addEventListener('click', function () {
            console.log("Toggle menu icon on mobile");
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

    // Dark Mode Toggle with System Preference Support
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Function to apply dark mode
    const enableDarkMode = () => {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        if (darkModeToggle) darkModeToggle.textContent = "Disable Dark Mode";
    };

    // Function to disable dark mode
    const disableDarkMode = () => {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        if (darkModeToggle) darkModeToggle.textContent = "Enable Dark Mode";
    };

    // Check saved preference in localStorage
    const savedTheme = localStorage.getItem("dark-mode");

    if (savedTheme) {
        // Apply saved theme
        if (savedTheme === "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    } else {
        // No saved preference, use system preference
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            enableDarkMode();
        }
    }

    // Toggle dark mode on button click
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (body.classList.contains("dark-mode")) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    // Listen for system preference changes and adapt
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (e.matches) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});
