const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    const name =
    document.getElementById("name");

    const email =
    document.getElementById("email");

    const password =
    document.getElementById("password");

    const nameError =
    document.getElementById("nameError");

    const emailError =
    document.getElementById("emailError");

    const passwordError =
    document.getElementById("passwordError");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Name Validation

    if(name.value.trim() === ""){
        nameError.textContent =
        "Name is required";

        name.setAttribute(
        "aria-invalid","true");

        valid = false;
    }

    // Email Regex Validation

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){

        emailError.textContent =
        "Enter valid email";

        email.setAttribute(
        "aria-invalid","true");

        valid = false;
    }

    // Password Validation

    if(password.value.length < 6){

        passwordError.textContent =
        "Password must be at least 6 characters";

        password.setAttribute(
        "aria-invalid","true");

        valid = false;
    }

    if(valid){
        alert("Registration Successful!");
        form.reset();
    }

});