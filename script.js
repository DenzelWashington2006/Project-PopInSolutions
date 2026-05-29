// script.js
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();
            
            // Simple validation check
            if (!name || !email || !phone || !message) {
                e.preventDefault(); // Stop form submission
                alert("Please fill out all required fields.");
                return;
            }
            
            // Basic Email Pattern validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                e.preventDefault();
                alert("Please enter a valid email address.");
                return;
            }
            
            alert("Thank you! Your message submitted successfully.");
        });
    }
});