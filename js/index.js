// INDEX
document.getElementById("aboutbutton").addEventListener("click", function() {
    document.getElementById("explain").style.opacity = 1;
    document.getElementById("explain").style.display = "block";
    document.getElementById("aboutbutton").style.opacity = 0;
})

var popoutFunction1 = function(){
    document.getElementById("popout1").classList.add("popouthover");
}
document.getElementById("feedavatar1").addEventListener('mouseover', popoutFunction1);

var removePopoutFunction1 = function(){
    document.getElementById("popout1").classList.remove("popouthover");
}
document.getElementById("feedavatar1").addEventListener('mouseleave', removePopoutFunction1);

var popoutFunction2 = function(){
    document.getElementById("popout2").classList.add("popouthover");
}
document.getElementById("feedavatar2").addEventListener('mouseover', popoutFunction2);

var removePopoutFunction2 = function(){
    document.getElementById("popout2").classList.remove("popouthover");
}
document.getElementById("feedavatar2").addEventListener('mouseleave', removePopoutFunction2);

var popoutFunction3 = function(){
    document.getElementById("popout3").classList.add("popouthover");
}
document.getElementById("feedavatar3").addEventListener('mouseover', popoutFunction3);

var removePopoutFunction3 = function(){
    document.getElementById("popout3").classList.remove("popouthover");
}
document.getElementById("feedavatar3").addEventListener('mouseleave', removePopoutFunction3);


window.addEventListener('load', function() {
    document.getElementById('aboutbutton').style.opacity = 1;
})

var clickforadd = function(){
    document.getElementById("reviewtag").classList.add("clickforhover");
}
document.getElementById('repimg').addEventListener('mouseover', clickforadd);
var clickforremove = function(){
    document.getElementById("reviewtag").classList.remove("clickforhover");
}
document.getElementById('repimg').addEventListener('mouseleave', clickforremove);

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