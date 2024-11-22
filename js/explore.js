// EXPLORE
var width = screen.width;
console.log(width);
if (width < 768) {
    let slideIndex = [1,1,1];
    let slideId = ["album-prev", "song-prev", "playlist-prev"]
    showSlides(1, 0);
    showSlides(1, 1);
    showSlides(1, 2);

    function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
    }

    function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 2) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
    }

}

else {
    var grids = document.getElementsByClassName("discoverslides");
    for (var i=0;i<grids.length;i+=1){
        grids[i].style.display = 'grid';
      }
}

window.addEventListener('load', function() {
    document.getElementById('discovertitle').style.opacity = 1;
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


// Select all album thumbnails
const albumThumbnails = document.querySelectorAll('.album-item');

// Event listener for each thumbnail
albumThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function () {
        // Update the display section with album details
        const displayCover = document.querySelector('#displayCover');
        const albumTitle = document.querySelector('#albumTitle');
        const albumDescription = document.querySelector('#albumDescription');
        const spotifyLink = document.querySelector('#spotifyLink');

        displayCover.src = this.querySelector('img').src;
        displayCover.alt = this.querySelector('img').alt;
        albumTitle.textContent = this.dataset.title;
        albumDescription.textContent = this.dataset.description;
        spotifyLink.href = this.dataset.link;
    });
});

// Update display section for artists
const artistThumbnails = document.querySelectorAll('.artist-item');
artistThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function () {
        const displayCover = document.querySelector('#displayArtistCover');
        const artistTitle = document.querySelector('#displayArtistCover + .discovertext p');
        const artistDescription = document.querySelector('#artistDescription');
        const spotifyLink = document.querySelector('#spotifyArtistLink');

        displayCover.src = this.querySelector('img').src;
        displayCover.alt = this.querySelector('img').alt;
        artistTitle.textContent = this.dataset.title;
        artistDescription.textContent = this.dataset.description;
        spotifyLink.href = this.dataset.link;
    });
});


window.addEventListener('DOMContentLoaded', () => {
    if (albumThumbnails.length > 0) {
        albumThumbnails[0].click(); // Simulate click on the first album
    }
});


