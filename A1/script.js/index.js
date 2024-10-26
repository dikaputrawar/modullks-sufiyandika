// Function to start loading animation and redirect to index.html
function startLoading() {
    document.querySelector(".cta-button").style.display = "none"; // Hide the button
    document.getElementById("loadingAnimation").style.display = "block"; // Show loading animation

    // Simulate loading for 3 seconds, then redirect to index.html
    setTimeout(function() {
        window.location.href = "message.html";
    }, 3000);
}
