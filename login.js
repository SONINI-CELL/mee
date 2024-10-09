// Function to check user credentials from localStorage
function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] && users[username] === password) {
        return true;
    }

    return false;
}

// Event listener for the login button
document.getElementById("login-button").addEventListener("click", function () {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;

    if (loginUser(loginUsername, loginPassword)) {
        window.location.href = "HP - Copy.html";
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
});
