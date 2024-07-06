let temp = 32;
let wind = 5;

let windchillCalc = (temp < 10 && wind > 5) ? (temp,wind) => Math.ceil(13.12 + 0.6215 * temp - (11.37 * wind ** 0.16) + 0.3965 * temp * wind ** 0.16) : `N/A`;

document.getElementById('windchill').textContent = windchillCalc;

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
