const newsflashes = [
    {
        info: "Reminder: The IRS deadline for filing 2023 tax returns is April 15, 2024.",
        product: "taxes"
    },
    {
        info: "Annuities can provide a steady income stream for retirement. Ask us how!",
        product: "financial planning"
    },
    {
        info: "Medicare Part D enrollment period ends on December 7. Don't miss out!",
        product: "Medicare"
    },
    {
        info: "Quarterly estimated tax payments are due on September 15. Stay compliant!",
        product: "taxes"
    },
    {
        info: "Considering a Roth IRA? It offers tax-free growth on your investments.",
        product: "financial planning"
    },
    {
        info: "Medicare Advantage plans offer additional benefits beyond Original Medicare.",
        product: "Medicare"
    },
    {
        info: "The IRS offers a free online tool to track your tax refund status.",
        product: "taxes"
    },
    {
        info: "Diversifying your investment portfolio can help mitigate risk.",
        product: "financial planning"
    },
    {
        info: "Open enrollment for Medicare begins on October 15. Review your options!",
        product: "Medicare"
    },
    {
        info: "Standard deductions have increased for 2024. Make sure to update your tax forms.",
        product: "taxes"
    },
    {
        info: "401(k) contribution limits have been raised for 2024. Maximize your savings!",
        product: "financial planning"
    },
    {
        info: "Medicare beneficiaries can get free preventive services like screenings and vaccines.",
        product: "Medicare"
    }
];

const partners=[
    {
        fname:"Adam",
        lname:"Ashby",
        product:"Medicare"
    },
    {
        fname:"Cindy",
        lname:"Ashby",
        product:"Tax Preparation"
    },
    {
        fname:"Kala",
        lname:"Bowers",
        product:"Medicare"
    },
    {
        fname:"Larry",
        lname:"Bowers",
        product:"Financial Planning"
    }
];

const heroes= [
    {
        portraitIMG:   'ashbys-by-river-portrait',
        landscapeSmall:'ashbys-by-river-landscapeSmall',
        landscapeLarge:'ashbys-by-river-landscapeLarge',
        alt: '',
        caption:''
    },
    {
        portraitIMG:'ashby-snow-portrait',
        landscapeSmall:'ashby-snow-landscapeSmall',
        landscapeLarge:'ashby-snow-landscapeLarge',
        alt:'',
        caption:''
    },
    {
        portraitIMG: 'camping-sunset-portrait' , 
        landscapeSmall:'camping-sunset-landscapeSmall',
        landscapeLarge:'camping-sunset-landscapeLarge',
        alt:'',
        caption:''
    },
    {
        portraitIMG:   'cave-waterfall-portrait',
        landscapeSmall:'cave-waterfall-landscapeSmall',
        landscapeLarge:'cave-waterfall-landscapeLarge',
        alt:'',
        caption:''
    },
    {
        portraitIMG:   'horsetooth-portrait',
        landscapeSmall:'horsetooth-landscapeSmall',
        landscapeLarge:'horsetooth-landscapeLarge',
        alt:'',
        caption:''
    },
    {
        portraitIMG: 'inside-office-portrait',  
        landscapeSmall:'inside-office-landscapeSmall',
        landscapeLarge:'inside-office-landscapeLarge',
        alt:'',
        caption:''
    },
    {
        portraitIMG:   'owls-portrait',
        landscapeSmall:'owls-landscapeSmall',
        landscapeLarge:'owls-landscapeLarge',
        alt:'',
        caption:''
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("hamburger-menu");

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

})