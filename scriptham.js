
function toggleMenu() {
    const navbarLinks = document.getElementById('navbar-links');
    if (navbarLinks.style.display === 'flex') {
        navbarLinks.style.display = 'none';
    } else {
        navbarLinks.style.display = 'flex';
    }
}


let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
    images[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('visible');
}

setInterval(showNextImage, 2000);


document.addEventListener('DOMContentLoaded', () => {
    images[currentIndex].classList.add('visible');
});
