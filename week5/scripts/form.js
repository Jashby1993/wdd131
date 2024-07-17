const today = new Date();

const year = today.getFullYear();
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = year;
}

let lastModified = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = lastModified.toLocaleString();
}

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productInput = document.getElementById('product');
    if (productInput) {
        products.forEach(product => {
            let optionHTML = `<option value="${product.id}">${product.name}</option>`;
            productInput.insertAdjacentHTML('beforeend', optionHTML);
        });
    }
});

function entryCounter() {
  if (localStorage.entryCount) {
    localStorage.entryCount = Number(localStorage.entryCount) + 1;
  } else {
    localStorage.entryCount = 1;
  }
  document.getElementById("entryCounterCurrent").innerHTML = localStorage.entryCount;
}

