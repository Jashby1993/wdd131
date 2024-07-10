

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manaus Brazil",
        location: "Manaus, Brazil",
        dedicated: "2012, June, 12",
        area: 32032,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/lds-temple-manaus-brazil-1085299-wallpaper.jpg"
    },
    {
        templeName: "Oquirrh Mountain Utah",
        location: "South Jordan, Utah",
        dedicated: "2009, August, 21",
        area: 60000,
        imageUrl: 
        "https://www.churchofjesuschrist.org/imgs/b46172590e39dff0cb70a5dcb243bd90febcccf8/full/320%2C/0/default"
    },
    {
        templeName: "Sydney Australia",
        location: "Carlingford, Australia",
        dedicated: "1980, April, 20",
        area: 30067,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-16035.jpg"
    }
    // Add more temple objects here...
  ];

  document.addEventListener('DOMContentLoaded', () => {
    // Update year element
    const today = new Date();
    const year = today.getFullYear();
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = year;
    }

    // Update last modified element
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }

    // Hamburger menu logic
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav");

    const toggleButtonVisibility = () => {
        const viewWidth = window.innerWidth;
        const maxScreenWidth = 500;

        if (hamburger) {
            if (viewWidth > maxScreenWidth) {
                hamburger.classList.add('hidden');
                navMenu.classList.add('show');
                navMenu.classList.remove('hidden');
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

   
    const templeDiv = document.querySelector("#temple-figures");

    function createCardHTML(temple) {
        return `
        <div class="temple-card">
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} square feet</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        </div>
        `;
    }

    function addCard(card) {
        let div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = card;
        templeDiv.appendChild(div);
    }

    function addCards(cardArray) {
        templeDiv.innerHTML = '';
        cardArray.forEach(temple => {
            let cardHTML = createCardHTML(temple);
            addCard(cardHTML);
        });
    }

    function getDedicatedYear(temple) {
        return parseInt(temple.dedicated.split(',')[0], 10);
    }

    // Initialize cards
    addCards(temples);

    const homeLink = document.getElementById('home-link');
    const oldLink = document.getElementById('old-link');
    const newLink = document.getElementById('new-link');
    const largeLink = document.getElementById('large-link');
    const smallLink = document.getElementById('small-link');

    const main = document.querySelector('main');

    function handleFilter(event) {
        event.preventDefault();

        switch(event.target.id) {
            case 'home-link':
                addCards(temples);
                break;
            case 'old-link':
                const oldTemples = temples.filter(temple => getDedicatedYear(temple) <= 1900);
                addCards(oldTemples);
                break;
            case 'new-link':
                const newTemples = temples.filter(temple => getDedicatedYear(temple) >= 2000);
                addCards(newTemples);
                break;
            case 'large-link':
                const largeTemples = temples.filter(temple => temple.area > 90000);
                addCards(largeTemples);
                break;
            case 'small-link':
                const smallTemples = temples.filter(temple => temple.area < 10000);
                addCards(smallTemples);
                break;
        }
    }

    homeLink.addEventListener('click', handleFilter);
    oldLink.addEventListener('click', handleFilter);
    newLink.addEventListener('click', handleFilter);
    largeLink.addEventListener('click', handleFilter);
    smallLink.addEventListener('click', handleFilter);
});