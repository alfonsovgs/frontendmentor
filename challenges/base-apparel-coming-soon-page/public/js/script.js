function onSubmit() {
    var emailInput = document.getElementById("email-text");
    var errorText = document.getElementById("error-text");
    var errorIcon = document.getElementById("error-icon");

    if (validateEmail(emailInput.value)) {
        errorText.classList.add("hidden");
        errorIcon.classList.add("hidden");
    }
    else {
        errorText.classList.remove("hidden");
        errorIcon.classList.remove("hidden");
    }
}

function validateEmail(email) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}
