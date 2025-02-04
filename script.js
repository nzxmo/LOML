document.getElementById("show-message").addEventListener("click", function() {
    let message = document.getElementById("message");
    message.classList.remove("hidden");
    message.style.opacity = "1";
});
