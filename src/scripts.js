// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleSearchBox() {
    var searchOverlay = document.getElementById("search-overlay");
    searchOverlay.style.display = (searchOverlay.style.display === "flex") ? "none" : "flex";
}

function closeSearchBox() {
    var searchOverlay = document.getElementById("search-overlay");
    searchOverlay.style.display = "none";
}
