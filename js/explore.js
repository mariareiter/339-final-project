// Ensure animations and updates work on all devices
window.addEventListener('load', function () {
    const discoverTitle = document.getElementById('discovertitle');
    if (discoverTitle) {
        discoverTitle.style.opacity = 1; // Fade in the title
    }
});

// Function to handle thumbnail clicks
function updateDisplaySection(thumbnail, displayCoverId, titleId, descriptionId, linkId) {
    const displayCover = document.querySelector(displayCoverId);
    const titleElement = document.querySelector(titleId);
    const descriptionElement = document.querySelector(descriptionId);
    const spotifyLink = document.querySelector(linkId);

    if (displayCover && titleElement && descriptionElement && spotifyLink) {
        displayCover.src = thumbnail.querySelector('img').src;
        displayCover.alt = thumbnail.querySelector('img').alt;
        titleElement.textContent = thumbnail.dataset.title;
        descriptionElement.textContent = thumbnail.dataset.description;
        spotifyLink.href = thumbnail.dataset.link;
    }
}

// Add event listeners for albums
const albumThumbnails = document.querySelectorAll('.album-item');
albumThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => updateDisplaySection(thumbnail, '#displayCover', '#albumTitle', '#albumDescription', '#spotifyLink'));

    // Add support for touch devices
    thumbnail.addEventListener('pointerdown', () => updateDisplaySection(thumbnail, '#displayCover', '#albumTitle', '#albumDescription', '#spotifyLink'));
});

// Add event listeners for artists
const artistThumbnails = document.querySelectorAll('.artist-item');
artistThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => updateDisplaySection(thumbnail, '#displayArtistCover', '#displayArtistCover + .discovertext p', '#artistDescription', '#spotifyArtistLink'));

    // Add support for touch devices
    thumbnail.addEventListener('pointerdown', () => updateDisplaySection(thumbnail, '#displayArtistCover', '#displayArtistCover + .discovertext p', '#artistDescription', '#spotifyArtistLink'));
});

// Simulate a click on the first album to pre-fill the display section
window.addEventListener('DOMContentLoaded', () => {
    if (albumThumbnails.length > 0) {
        albumThumbnails[0].dispatchEvent(new Event('click', { bubbles: true }));
    }
});



