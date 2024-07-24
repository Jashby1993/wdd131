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

const testimonials = [
    {
      comment: "Legacy helped me understand my retirement options clearly. I feel secure with my annuities thanks to Larry Bowen.",
      author:'Suzy B.',
      product: "financial planning"
    },
    {
      comment: "Adam Ashby made the Medicare enrollment process so simple. I feel confident in my healthcare coverage now.",
      author:'Johnny C.',
      product: "Medicare services"
    },
    {
      comment: "Kala Bowen was incredibly helpful in comparing Medicare plans. I found the best plan for my needs.",
      author:'Emily S.',
      product: "Medicare services"
    },
    {
      comment: "Cindy Ashby made tax filing stress-free. She is thorough and very knowledgeable.",
      author:'Svetlana D.',
      product: "tax preparation"
    },
    {
      comment: "Larry Bowen's advice on annuities has given me peace of mind for my financial future.",
      author:'Sophia M.',
      product: "financial planning"
    },
    {
      comment: "Legacy is a one-stop-shop for all my retirement needs. I highly recommend their services.",
      author:'Liam P.',
      product: "Legacy"
    },
    {
      comment: "The personalized Medicare comparison service from Adam Ashby was fantastic. I never knew I had so many options.",
      author:'Olivia B.',
      product: "Medicare services"
    },
    {
      comment: "Thanks to Kala Bowen, I feel confident in my Medicare plan choice. Her expertise is invaluable.",
      author:'Mason T.',
      product: "Medicare services"
    },
    {
      comment: "Cindy Ashby’s tax preparation service is top-notch. I trust her completely with my finances.",
      author:'Dae-Jung K.',
      product: "tax preparation"
    },
    {
      comment: "Legacy has been a lifesaver for my retirement planning. Larry Bowen is excellent at what he does.",
      author:'Noah K.',
      product: "financial planning"
    },
    {
      comment: "Adam Ashby’s guidance on Medicare enrollment was a huge help. I appreciate his clear explanations.",
      author:'Isabella C.',
      product: "Medicare services"
    },
    {
      comment: "I couldn’t have navigated Medicare without Kala Bowen’s help. She made it so easy.",
      author:'Lucas G.',
      product: "Medicare services"
    },
    {
      comment: "Cindy Ashby made sure my taxes were filed correctly and on time. I couldn’t ask for a better service.",
      author:'Mia L.',
      product: "tax preparation"
    },
    {
      comment: "Legacy offers comprehensive services for retirees. Their team is exceptional.",
      author:'Jacob W.',
      product: "Legacy"
    },
    {
      comment: "Larry Bowen’s financial planning has secured my future. I’m very grateful for his advice.",
      author:'Charlotte S.',
      product: "financial planning"
    },
    {
      comment: "Adam Ashby’s Medicare comparison service is the best I’ve encountered. I’m very satisfied.",
      author:'Arjun P.',
      product: "Medicare services"
    },
    {
      comment: "Kala Bowen’s expertise in Medicare is unmatched. She helped me find the perfect plan.",
      author:'Amelia F.',
      product: "Medicare services"
    },
    {
      comment: "Cindy Ashby’s tax services are efficient and reliable. I trust her with all my tax needs.",
      author:'Michael B.',
      product: "tax preparation"
    },
    {
      comment: "Larry Bowen at Legacy has provided invaluable financial advice. I’m set for retirement.",
      author:'Harper J.',
      product: "financial planning"
    },
    {
      comment: "Legacy’s services have made my retirement planning seamless. Highly recommend them.",
      author:'Priya N.',
      product: "Legacy"
    }
  ];

  const partners = [
    {
        fname: "Larry",
        lname: "Bowers",
        product: "Financial Planning",
        image: 'images/larry-profile.webp',
        bio: 'Larry has been dedicated to financial planning for decades, specializing in annuities. He co-founded Legacy in 2002 with the vision of meeting the unique needs of a specific market. Larry’s commitment to treating each client as family has fostered lasting relationships of trust and success.'
    },
    {
        fname: "Kala",
        lname: "Bowers",
        product: "Medicare",
        image: 'images/kala-profile.webp',
        bio: `Kala has focused her career on Medicare comparison and enrollment, particularly Medicare Supplements. As a co-founder of Legacy, she has worked alongside Larry to build the business since 2002. Kala's compassionate approach ensures that each client feels like part of the Legacy family.`
    },
    {
        fname: "Cindy",
        lname: "Ashby",
        product: "Tax Preparation",
        image: 'images/cindy-profile.webp',
        bio: `Cindy has been a tax service professional since 2002, bringing a wealth of knowledge to Legacy when she joined at the end of 2022. Her integration into the Legacy family has been seamless, and her clients benefit from her extensive experience and personal dedication to their financial well-being.`
    },
    {
        fname: "Adam",
        lname: "Ashby",
        product: "Medicare",
        image: 'images/adam-profile.webp',
        bio: `"Adam has been offering insurance and financial advice since 2008, with a strong focus on the Public Education market. Since joining Legacy, Adam has channeled his passion for service into helping clients with Medicare, particularly Medicare Supplements. He is excited to contribute his expertise to a new organization that shares his commitment to service.`
    }
];


const heroes= [
    {
        portraitIMG: 'inside-office-portrait',  
        landscapeSmall:'inside-office-landscapeSmall',
        landscapeLarge:'inside-office-landscapeLarge',
        alt:'Inside the Legacy Office',
        captionHeading:'Legacy',
        captionText:'Let us help you BUILD A LEGACY'
    },
    {
        portraitIMG:   'ashbys-by-river-portrait',
        landscapeSmall:'ashbys-by-river-landscapeSmall',
        landscapeLarge:'ashbys-by-river-landscapeLarge',
        alt: 'Adam and Cindy Ashby by a river',
        captionHeading:'',
        captionText:'We keep the money flowing!'
    },

    {
        portraitIMG: 'camping-sunset-portrait' , 
        landscapeSmall:'camping-sunset-landscapeSmall',
        landscapeLarge:'camping-sunset-landscapeLarge',
        alt:'Beautiful Colorado Sunset',
        captionHeading:'',
        captionText:'Protecting your LEGACY. Even AFTER the sun goes down!'
    },
    {
        portraitIMG:   'cave-waterfall-portrait',
        landscapeSmall:'cave-waterfall-landscapeSmall',
        landscapeLarge:'cave-waterfall-landscapeLarge',
        alt:'Waterfall running through a cave',
        captionHeading:'Legacy',
        captionText:'Our LEGACY is helping you protect yours!'
    },
    {
        portraitIMG:'ashby-snow-portrait',
        landscapeSmall:'ashby-snow-landscapeSmall',
        landscapeLarge:'ashby-snow-landscapeLarge',
        alt:'Adam and Cindy Ashby out in the snow',
        captionHeading:'',
        captionText:''
    },
    {
        portraitIMG:   'horsetooth-portrait',
        landscapeSmall:'horsetooth-landscapeSmall',
        landscapeLarge:'horsetooth-landscapeLarge',
        alt:'Horsetooth Resorvoir Landscape',
        captionHeading:'Serving Northwest COlorado',
        captionText:"Headquartered in Fort Collins, we're committed to serving our local Coloradoans!"
    },

    {
        portraitIMG:   'owls-portrait',
        landscapeSmall:'owls-landscapeSmall',
        landscapeLarge:'owls-landscapeLarge',
        alt:'Owls looking out',
        captionHeading:'Always Looking out for YOU!',
        captionText:'We are here to watch your back, and help you build and protect your LEGACY!'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("hamburger-menu");
    const contactRequestButton = document.getElementById('contact-request');
    const contactForm = document.getElementById('contact-form');
    const exitFormButton = document.getElementById('exit-form');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    const contactFormOverlay = document.getElementById('contact-form-overlay');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const preferenceRadios = document.querySelectorAll('input[name="preferred-communication"]');
    const testimonialGrid = document.getElementById('testimonial-grid');
    const biosDiv = document.querySelector('.bios');
    let currentSlide = 0; // Ensure this is defined at the top or in the appropriate scope

    function populateTestimonialGrid(testimonials) {
        if (testimonialGrid) {
            for (let i = 0; i < 6; i++) {
                let anotherReview = document.createElement('div');
                anotherReview.classList.add('review');
                anotherReview.innerHTML = createTestimonialCard(testimonials);
                testimonialGrid.append(anotherReview);
            }
        }
    }

    // Assuming `testimonials` is already defined
    populateTestimonialGrid(testimonials);

    preferenceRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'email') {
                emailInput.required = true;
                phoneInput.required = false;
            } else if (this.value === 'phone') {
                phoneInput.required = true;
                emailInput.required = false;
            }
        });
    });

    function createBioHTML(partner) {
        return `
            <img src="${partner.image}" alt="profile photo of ${partner.fname} ${partner.lname}" loading="lazy">
            <p class="bio-name">${partner.fname} ${partner.lname}</p>
            <p class="bio-content">${partner.bio}</p>
            <p class="bio-market">${partner.product}</p>
        `;
    }

    function fillBios(partners) {
        if (biosDiv) {
            for (let i = 0; i < partners.length; i++) {
                let bioDiv = document.createElement('div');
                bioDiv.classList.add('partnerBio');
                bioDiv.innerHTML = createBioHTML(partners[i]);
                biosDiv.append(bioDiv);
            }
        } else {
            console.warn('Element with class ".bios" not found.');
        }
    }

    if (biosDiv) {
        // Assuming `partners` is already defined
        fillBios(partners);
    }

    const toggleButtonVisibility = () => {
        const viewWidth = window.innerWidth;
        const maxScreenWidth = 999;

        if (hamburger) {
            if (viewWidth > maxScreenWidth) {
                hamburger.classList.add('hidden');
                navMenu.classList.add('show');
                navMenu.classList.remove('hidden');
                hamburger.textContent = '☰';
            } else {
                hamburger.classList.remove('hidden');
                navMenu.classList.add('hidden');
                navMenu.classList.remove('show');
            }
        }
    };

    const toggleNavMenu = () => {
        if (navMenu) {
            navMenu.classList.toggle('show');
            navMenu.classList.toggle('hidden');

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

    if (contactRequestButton && contactForm && exitFormButton) {
        contactRequestButton.addEventListener('click', function() {
            contactForm.style.display = 'block';
            contactRequestButton.style.display = 'none';
        });

        exitFormButton.addEventListener('click', function() {
            contactForm.style.display = 'none';
            contactRequestButton.style.display = 'block';
        });
    }

    function createTestimonialCard(testimonials) {
        let openQuote = `<img src="images/open-quote.svg" alt="open-quote" id="open-quote-icon">`;
        let closeQuote = `<img src="images/close-quote.svg" alt="close-quote" id="close-quote-icon">`;

        let currentTestimonial = testimonials[getRandomIndex(testimonials.length)];

        let testimonialCardHTML = `
            <div class="testimonial-card">
                ${openQuote}
                <p class="review">${currentTestimonial.comment}</p>
                ${closeQuote}
                <p class="review-author">--${currentTestimonial.author}</p>
            </div>
        `;

        return testimonialCardHTML;
    }

    function getRandomIndex(arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const footerOffsetTop = footer ? footer.offsetTop : document.body.scrollHeight;
        const headerHeight = header ? header.offsetHeight : 0;

        if (scrollTop > lastScrollTop) {
            header.classList.add('header-mini');
            if (scrollTop + headerHeight >= footerOffsetTop) {
                header.classList.remove('sticky-header');
                header.classList.add('hidden-header');
            } else {
                header.classList.add('sticky-header');
                header.classList.remove('hidden-header');
            }
        } else {
            header.classList.remove('sticky-header');
            header.classList.remove('hidden-header');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    function toggleFormButtonVisibility() {
        const scrollY = window.scrollY;
        const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;
        const contactRequestButtonHeight = contactRequestButton.offsetHeight;

        if (scrollY > footerTop - contactRequestButtonHeight) {
            contactRequestButton.classList.add('show');
        } else {
            contactRequestButton.classList.remove('show');
        }
    }

    toggleFormButtonVisibility();
    window.addEventListener('scroll', toggleFormButtonVisibility);

    // Show the contact form
    contactRequestButton.addEventListener('click', () => {
        contactFormOverlay.classList.remove('hidden');
    });

    // Hide the contact form
    exitFormButton.addEventListener('click', () => {
        contactFormOverlay.classList.add('hidden');
    });

    // Optionally, hide the contact form if clicking outside of it
    contactFormOverlay.addEventListener('click', (e) => {
        if (e.target === contactFormOverlay) {
            contactFormOverlay.classList.add('hidden');
        }
    });
});
