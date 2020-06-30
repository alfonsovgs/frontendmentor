const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var firstNameError = document.getElementById("first-name-error");
    var lastnameError = document.getElementById("last-name-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    if (isNotEmpty(firstNameInput)) {
        firstNameInput.classList.remove("border-red-primary");
        firstNameError.classList.add("hidden");
    }
    else {
        firstNameInput.classList.add("border-red-primary");
        firstNameError.classList.remove("hidden");
    }

    if (isNotEmpty(lastNameInput)) {
        lastNameInput.classList.remove("border-red-primary");
        lastnameError.classList.add("hidden");
    }
    else {
        lastNameInput.classList.add("border-red-primary");
        lastnameError.classList.remove("hidden");
    }

    if (validateEmail(emailInput.value)) {
        emailInput.classList.remove("border-red-primary");
        emailError.classList.add("hidden");
    }
    else {
        emailInput.classList.add("border-red-primary");
        emailError.classList.remove("hidden");
    }

    if (isNotEmpty(passwordInput)) {
        passwordInput.classList.remove("border-red-primary");
        passwordError.classList.add("hidden");
    }
    else {
        passwordInput.classList.add("border-red-primary");
        passwordError.classList.remove("hidden");
    }
}

function validateEmail(email) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

function isNotEmpty(input) {
    return input.value.trim().length;
}