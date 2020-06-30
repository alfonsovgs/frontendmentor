const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");

    if (validateEmail(emailInput.value)) {
        emailInput.classList.remove("border-light-red-secondary");
        emailError.classList.add("hidden");
    }
    else {
        emailInput.classList.add("border-light-red-secondary");
        emailError.classList.remove("hidden");
    }
})

function validateEmail(email) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}