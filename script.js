document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("show-message");
    let message = document.getElementById("message");

    button.addEventListener("click", function () {
        message.classList.toggle("hidden");
        message.style.opacity = "1";
    });
});
