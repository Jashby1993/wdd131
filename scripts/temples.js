const today = new Date();

const year = today.getFullYear();
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = year;
}

let lastModified = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = lastModified;
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav");

    // Function to toggle the visibility of the hamburger button based on screen width
    const toggleButtonVisibility = () => {
        const viewWidth = window.innerWidth;
        const maxScreenWidth = 500;

        if (hamburger) {
            if (viewWidth > maxScreenWidth) {
                hamburger.classList.add('hidden');
                navMenu.classList.remove('show'); 
                navMenu.classList.add('hidden');
                hamburger.textContent = '☰'; 
            } else {
                hamburger.classList.remove('hidden');
            }
        }
    };

    
    const toggleNavMenu = () => {
        if (navMenu) {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('show');

            if (navMenu.classList.contains('show')) {
                hamburger.textContent = '❌';
            } else {
                hamburger.textContent = '☰';
            }
        }
    };

    
    toggleButtonVisibility();

   
    window.addEventListener('resize', toggleButtonVisibility);

    
    if (hamburger) {
        hamburger.addEventListener('click', toggleNavMenu);
    }
});