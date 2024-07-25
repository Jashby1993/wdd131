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
  // Initialize the product dropdown
  const productInput = document.getElementById('product');
  if (productInput) {
      products.forEach(product => {
          let optionHTML = `<option value="${product.id}">${product.name}</option>`;
          productInput.insertAdjacentHTML('beforeend', optionHTML);
      });
  }

  // Initialize the year and last modified fields
  const yearElement = document.getElementById('year');
  if (yearElement) {
      const year = new Date().getFullYear();
      yearElement.textContent = year;
  }

  const lastModifiedElement = document.getElementById('lastModified');
  if (lastModifiedElement) {
      let lastModified = new Date(document.lastModified);
      lastModifiedElement.textContent = lastModified.toLocaleString();
  }

  // Initialize the entry counter display
  const entryCounterElement = document.getElementById('entryCounterCurrent');
  if (entryCounterElement) {
      entryCounterElement.textContent = localStorage.getItem('entryCount') || 0;
  }
});

function entryCounter() {
  if (localStorage.entryCount) {
      localStorage.entryCount = Number(localStorage.entryCount) + 1;
  } else {
      localStorage.entryCount = 1;
  }
  localStorage.setItem('entryCount', localStorage.entryCount);

  // Update the displayed count on the current page
  const entryCounterElement = document.getElementById('entryCounterCurrent');
  if (entryCounterElement) {
      entryCounterElement.textContent = localStorage.entryCount;
  }
}
