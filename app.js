const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const cpassword = document.querySelector("#Cpassword");
const registerButton = document.getElementById('registerBtn');

// Form submit event listener
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (validateInputs()) {
        alert("Successfully Registered!");
        form.reset(); // Clears the form after successful registration
        clearAllErrors(); // Clear all errors
    }
});

// Validate Inputs (real-time)
function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;

    if (usernameVal === "") {
        success = false;
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }

    if (emailVal === "") {
        success = false;
        setError(email, "Email is required");
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, "Please enter a valid email");
    } else {
        setSuccess(email);
    }

    if (passwordVal === "") {
        success = false;
        setError(password, "Password is required");
    } else if (passwordVal.length < 8) {
        success = false;
        setError(password, "Password must be at least 8 characters");
    } else {
        setSuccess(password);
    }

    if (cpasswordVal === "") {
        success = false;
        setError(cpassword, "Confirm Password is required");
    } else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, "Passwords do not match");
    } else {
        setSuccess(cpassword);
    }

    return success;
}

// Set error message
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

// Clear error (set success)
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}

// Email validation
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}

// Clear all errors after successful registration
function clearAllErrors() {
    const inputGroups = document.querySelectorAll(".input-group");
    inputGroups.forEach((group) => {
        group.classList.remove("error", "success");
        const errorElement = group.querySelector(".error");
        errorElement.innerText = ""; // Clear all error messages
    });
}

// Real-time validation on input fields
username.addEventListener('input', () => {
    if (username.value.trim() !== "") {
        setSuccess(username);
    } else {
        setError(username, "Username is required");
    }
});

email.addEventListener('input', () => {
    if (validateEmail(email.value.trim())) {
        setSuccess(email);
    } else {
        setError(email, "Please enter a valid email");
    }
});

password.addEventListener('input', () => {
    if (password.value.trim().length >= 8) {
        setSuccess(password);
    } else {
        setError(password, "Password must be at least 8 characters");
    }
});

cpassword.addEventListener('input', () => {
    if (cpassword.value.trim() === password.value.trim()) {
        setSuccess(cpassword);
    } else {
        setError(cpassword, "Passwords do not match");
    }
});
