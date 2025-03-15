function logout() {
    // Clear authentication data from localStorage
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdmin');
    
    // Redirect to login page
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    // Find all logout buttons
    const logoutButtons = document.querySelectorAll('.logout-btn');
    
    // Add click event handler to all logout buttons
    logoutButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    });
});