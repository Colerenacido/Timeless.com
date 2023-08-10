const toggleButton = document.getElementById('toggleButton');
const menuContainer = document.querySelector('.dropdown');

toggleButton.addEventListener('click', () => {
    // Toggle the menu visibility
    if (menuContainer.style.right === '-250px') {
        menuContainer.style.right = '0';
    } else {
        menuContainer.style.right = '-250px';
    }
});


