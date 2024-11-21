//Friends dropdown menu
document.getElementById("friendsbutton1").addEventListener('click', function() {
    if (document.getElementById("menu1").style.display === "none") {
        document.getElementById("menu1").style.display = "block";
    }
    else {
        document.getElementById("menu1").style.display = "none";
    }
})

//Add song popup
var songgrid = document.getElementsByClassName("songgrid");
var selectsong = songgrid[0];
document.getElementById("addsongbutton").addEventListener('click', function() {
    var grid = document.getElementsByClassName("songgrid");
    var select = grid[0];
    document.getElementById("addsong").style.opacity = 1;
    select.style.filter = "blur(5px)";
    if (select.style.filter === "blur(5px)") {
        document.getElementById("songgrid").addEventListener('click', function() {
            select.style.filter = "none";
            document.getElementById("addsong").style.opacity = 0;
        })
        document.getElementById("addsongbutton").addEventListener('click', function() {
            select.style.filter = "none";
            document.getElementById("addsong").style.opacity = 0;
        })
    }
})

//Add album popup
var grid = document.getElementsByClassName("albumgrid");
var select = grid[0];
document.getElementById("addalbumbutton").addEventListener('click', function() {
    var grid = document.getElementsByClassName("albumgrid");
    var select = grid[0];
    document.getElementById("addalbum").style.opacity = 1;
    select.style.filter = "blur(5px)";
    if (select.style.filter === "blur(5px)") {
        document.getElementById("albumgrid").addEventListener('click', function() {
            select.style.filter = "none";
            document.getElementById("addalbum").style.opacity = 0;
        })
        document.getElementById("addalbumbutton").addEventListener('click', function() {
            select.style.filter = "none";
            document.getElementById("addalbum").style.opacity = 0;
        })
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
