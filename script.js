function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const toggleIndicator = document.querySelector(".toggle-indicator");
    const toggleText = document.querySelectorAll(".toggle-text");

    if (loginForm.classList.contains("hidden")) {
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
        toggleIndicator.style.transform = "translateX(0)"; // Slide to the right
        
        // Highlight the Login Text
        toggleText[0].style.color = "black"; // Change color for active text
        toggleText[1].style.color = "black"; // Change back to default color

    } else {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
        toggleIndicator.style.transform = "translateX(100%)"; // Slide to the left
        
        // Highlight the Signup Text
        toggleText[0].style.color = "black"; // Change back to default color
        toggleText[1].style.color = "black"; // Change color for active text
    }
}

// Add event listener to toggle button
document.getElementById("toggle-button").addEventListener("click", toggleForm);
