// Select the toggle button and the navbar menu
const toggleButton = document.querySelector('.toggle-button');
const navbarMenu = document.querySelector('.navbar-menu');

// Add click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the "active" class on the navbar menu to show or hide it
    navbarMenu.classList.toggle('active');
});