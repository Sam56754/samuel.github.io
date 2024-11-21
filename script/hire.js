document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("hire-form");
    const confirmationMessage = document.getElementById("confirmation-message");
    const submitButton = document.getElementById("submit-button");

    // Form validation and submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Clear previous messages
        confirmationMessage.style.display = "none";
        confirmationMessage.textContent = "";

        // Validate form inputs
        if (!validateForm()) {
            return;
        }

        // Simulate data submission (can be replaced with real backend logic)
        submitForm();
    });

    // Validate the form
    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const services = document.getElementById("services").selectedOptions;
        const projectDescription = document.getElementById("project-description").value.trim();
        const fileUpload = document.getElementById("file-upload").files[0];

        if (!name || !email || !phone || !services.length || !projectDescription) {
            showErrorMessage("Please fill in all the required fields.");
            return false;
        }

        if (!validateEmail(email)) {
            showErrorMessage("Please provide a valid email address.");
            return false;
        }

        if (fileUpload && !validateFile(fileUpload)) {
            return false;
        }

        return true;
    }

    // Validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate file upload
    function validateFile(file) {
        const allowedExtensions = ["doc", "docx", "pdf", "txt", "jpg", "png"];
        const maxFileSize = 2 * 1024 * 1024; // 2MB
        const fileExtension = file.name.split(".").pop().toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
            showErrorMessage(
                `Invalid file type. Allowed types: ${allowedExtensions.join(", ")}.`
            );
            return false;
        }

        if (file.size > maxFileSize) {
            showErrorMessage("File size must not exceed 2MB.");
            return false;
        }

        return true;
    }

    // Submit form (simulated)
    function submitForm() {
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        // Simulate a network request
        setTimeout(() => {
            confirmationMessage.style.display = "block";
            confirmationMessage.textContent = "Your request has been submitted successfully!";
            form.reset();
            submitButton.disabled = false;
            submitButton.textContent = "Submit Request";
        }, 2000); // 2-second delay for demo purposes
    }

    // Show error message
    function showErrorMessage(message) {
        confirmationMessage.style.display = "block";
        confirmationMessage.style.color = "red";
        confirmationMessage.textContent = message;
    }
});
