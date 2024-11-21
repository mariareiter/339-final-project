document.getElementById("friendsbutton2").addEventListener('click', function() {
    if (document.getElementById("menu2").style.display === "none") {
        document.getElementById("menu2").style.display = "block";
    }
    else {
        document.getElementById("menu2").style.display = "none";
    }
})

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