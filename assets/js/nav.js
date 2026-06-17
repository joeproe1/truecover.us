// Mobile menu toggle
function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    var menuToggle = document.querySelector('.menu-toggle');
    var header = document.querySelector('.site-header');

    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        header.style.zIndex = '1002';
    } else {
        header.style.zIndex = '';
    }
}
