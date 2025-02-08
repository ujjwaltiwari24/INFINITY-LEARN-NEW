let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.onclick = (e) => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
    sideBar.classList.remove('active');
    body.classList.remove('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
    search.classList.remove('active');

    if (window.innerWidth < 1200) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}

// ---------------------- LOGIN IMPLEMENTATION (INSECURE) ----------------------
/*const validUsers = {
    'student1': 'password123',
    'admin1': 'securePass'
};

let isLoggedIn = false; // Track login status

function showLoginPrompt() {
    const username = prompt('Username:');
    const password = prompt('Password:');

    if (validUsers[username] === password) {
        isLoggedIn = true;
        alert('Login successful!');
        // Proceed to show content or functionality accessible after login
        //  e.g., showAdminControls();  You'd need to create this function.
    } else {
        alert('Login failed.');
        showLoginPrompt();  // Retry login on failure
    }
}

// Call showLoginPrompt when the page loads, or when a specific event happens.
window.onload = showLoginPrompt;  // Login on page load

// Example function (you need to define what these controls are)
function showAdminControls() {
    // Display elements or enable functionalities that should only be accessible to administrators.
    // For example:
    document.getElementById('admin-panel').style.display = 'block'; // Show an admin panel div
}*/