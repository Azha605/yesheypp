//Form Validation
function validateForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("errorMessage");

    if (fullName === "" || email === "" || message === "") {
        errorMessage.textContent = "All fields are required!!";
        errorMessage.style.color = "red";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}