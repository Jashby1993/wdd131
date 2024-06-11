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