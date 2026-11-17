
let themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Mode clair";
    } else {
        themeToggle.textContent = "🌙 Mode sombre";
    }

});
