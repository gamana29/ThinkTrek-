// Check if the user is logged in
const loggedInUser = localStorage.getItem('loggedInUser');
if (!loggedInUser) {
    // If not logged in, redirect to login page
    window.location.href = "login.html";
} else {
    document.getElementById('username').textContent = loggedInUser;
}

// Logout functionality
document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    window.location.href = "login.html"; // Redirect to login page after logging out
});
