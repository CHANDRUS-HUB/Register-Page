const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const cpassword = document.querySelector("#Cpassword");
const registerButton = document.getElementById('registerBtn');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateInputs()) {
        
        alert("Successfully Registered!");
        form.reset(); 
        clearAllSuccessMessages(); 
    }
});

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
        clearCPasswordError();
    }

    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}


registerButton.addEventListener('click', function() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    
    if (usernameVal === "" || emailVal === "" || passwordVal === "" || cpasswordVal === "") {
        alert("Please fill out all required fields!");
    }
});
