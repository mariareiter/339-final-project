document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons with the class "showbutton"
    var buttons = document.querySelectorAll(".showbutton");

    // Loop through each button and add a click event listener
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

            // Hide the button itself after showing the reviews
            button.style.display = "none";
        });
    });
});
