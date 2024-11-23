//REVIEW
document.getElementById("showbutton").addEventListener("click", function() {
    var elements = document.getElementsByClassName("hiddenreview");
    for (var i = 0; i < elements.length; i += 1) {
        elements[i].style.display = "block";
    }
    document.getElementById("showbutton").style.display = "none";
})
