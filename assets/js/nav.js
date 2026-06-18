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

// Dropdown toggle
document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.has-dropdown');

    dropdowns.forEach(function (dropdown) {
        var toggle = dropdown.querySelector('.dropdown-toggle');

        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdown.classList.toggle('open');
            toggle.setAttribute('aria-expanded', dropdown.classList.contains('open'));
        });

        // Hover open on desktop
        dropdown.addEventListener('mouseenter', function () {
            if (window.innerWidth > 768) {
                dropdown.classList.add('open');
                toggle.setAttribute('aria-expanded', 'true');
            }
        });

        dropdown.addEventListener('mouseleave', function () {
            if (window.innerWidth > 768) {
                dropdown.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', function () {
        dropdowns.forEach(function (d) {
            d.classList.remove('open');
            d.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
        });
    });
});
