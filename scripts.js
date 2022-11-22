const toggleMenu = document.getElementById('toggle-menu');
const menu = document.getElementById('nav-links');

toggleMenu.addEventListener('click', () => {
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
});