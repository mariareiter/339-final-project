document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons with the class "showbutton"
    var buttons = document.querySelectorAll(".showbutton");

    // Add a click event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Find the parent "reviews" container of this button
            var parentContainer = button.closest(".reviews");

            // Find all hidden reviews within this parent container
            var hiddenReviews = parentContainer.querySelectorAll(".hiddenreview");

            // Display each hidden review
            hiddenReviews.forEach(function (review) {
                review.style.display = "block";
            });

            // Hide the button after reviews are shown
            button.style.display = "none";
        });
    });
});

