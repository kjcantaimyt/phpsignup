// Highlight the active navigation link
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Toggle sidebar functionality
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const mainContent = document.querySelector('.main-content');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        mainContent.classList.toggle('collapsed');
    });
});

// Ensure the save button works on the settings page
const saveButton = document.querySelector('.save-btn');
if (saveButton) {
    saveButton.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Settings saved successfully!');
    });
}
