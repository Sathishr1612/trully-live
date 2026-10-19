// Navigation Menu start here

let currentSlide = 0;
let lastScroll = 0;
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

const carouselInner = document.getElementById('heroCarouselInner');
const indicators = document.querySelectorAll('.hero-indicator');
const carouselItems = carouselInner ? carouselInner.querySelectorAll('.hero-carousel-item') : [];
let totalSlides = carouselItems.length || 3;

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

function toggleMobileDropdown(element) {
    const parent = element.parentElement;
    const allItems = document.querySelectorAll('.mobile-nav-item');
    allItems.forEach(item => {
        if (item !== parent) item.classList.remove('active');
    });
    parent.classList.toggle('active');
}

let autoplayInterval = null;
if (carouselInner && carouselItems.length) {
    autoplayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Ensure initial state is rendered and autoplay is running
function initHeroCarousel() {
    updateCarousel();
    if (!autoplayInterval && carouselInner && carouselItems.length > 1) {
        autoplayInterval = setInterval(() => changeSlide(1), 5000);
    }
}

// Run init after DOM is ready (script is placed at end but ensure safe init)
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initHeroCarousel();
} else {
    document.addEventListener('DOMContentLoaded', initHeroCarousel);
}

function changeSlide(direction) {
    currentSlide += direction;
    if (carouselItems.length) totalSlides = carouselItems.length;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateCarousel();
    resetAutoplay();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoplay();
}

function updateCarousel() {
    if (!carouselInner) return;
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) indicator.classList.add('active');
        else indicator.classList.remove('active');
    });
}

function resetAutoplay() {
    if (!autoplayInterval) return;
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => changeSlide(1), 5000);
}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (navbar) {
        if (currentScroll > 100) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }

    if (currentScroll > lastScroll && currentScroll > 150) {
        if (navbar) navbar.classList.add('hidden');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    } else {
        if (navbar) navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});

document.addEventListener('click', (e) => {
    if (hamburger && mobileMenu && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Touch support for mobile carousel
let touchStartX = 0;
let touchEndX = 0;
if (carouselInner) {
    carouselInner.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carouselInner.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    if (touchEndX < touchStartX - 50) changeSlide(1);
    if (touchEndX > touchStartX + 50) changeSlide(-1);
}

// Navigation Menu end here


// Project card showcase start here


const hotels1 = [
    {
        name: "Trulyy The Kumbha Residency",
        location: "Kumbhalgarh, Rajasthan",
        image: "images/kumbha-residency.webp",
        link: "trulyy-the-kumbha-residency.html"
    },
    {
        name: "Trulyy The Kanooja Palace",
        location: "Kumbhalgarh, Rajasthan",
        image: "images/kanooja-palace-thumb.webp",
        link: "trulyy-the-kanooja-palace.html"
    },
    {
        name: "Trulyy The Maharana Bagh",
        location: "Udaipur, Rajasthan",
        image: "images/the-maharana-bagh-swim.webp",
        link: "trulyy-the-maharana-bagh.html"
    },
    {
        name: "The Mayur Palace",
        location: "Udaipur, Rajasthan",
        image: "images/mayur-palace-thumb.webp",
        link: "Mayur Palace"
    }
];

const hotels2 = [
    {
        name: "Trulyy Rudransh Inn",
        location: "Jodhpur, Rajasthan",
        image: "images/rudransh-inn.webp",
        link: "trulyy-rudransh-inn.html"
    },
    {
        name: "Ramada by Wyndham, Jaisalmer",
        location: "Marketed by Trulyy India",
        image: "images/ramada-thumb.webp",
        link: "ramada-by-wyndham.html"
    },
    {
        name: "Trulyy The Blackbuck Trails",
        location: "Velavadar, Gujarat",
        image: "images/blackbuck-trails.webp",
        link: "trulyy-the-black-buck-trails.html"
    },
    {
        name: "Aranya Nature Resort",
        location: "Kumbhalgarh, Rajasthan",
        image: "images/aryana-retreat-thumb.webp",
        link: "https://www.aranyanatureretreat.com/"
    }
];

function createCard(hotel) {
    return `
                <div class="hotel-card">
                    <img src="${hotel.image}" loading="lazy" alt="${hotel.name}" class="hotel-image">
                    <div class="hotel-info">
                        <h2 class="hotel-name">${hotel.name}</h2>
                        <p class="hotel-location">${hotel.location}</p>
                        <a href="${hotel.link}" class="explore-btn">Explore More</a>
                    </div>
                </div>
            `;
}

class InfiniteCarousel {
    constructor(containerId, hotels, speed, direction) {
        this.container = document.getElementById(containerId);
        this.hotels = hotels;
        this.speed = speed;
        this.direction = direction; // 'left' or 'right'
        this.position = 0;
        this.isPaused = false;
        this.animationId = null;

        // If container not present on the current page, mark disabled and skip init
        if (!this.container) {
            this.disabled = true;
            return;
        }

        this.disabled = false;
        this.init();
    }

    init() {
        // Create 3 sets of cards for seamless infinite scroll
        const cardsHTML = this.hotels.map(createCard).join('');
        this.container.innerHTML = cardsHTML + cardsHTML + cardsHTML;

        // Start in the middle set
        const cardWidth = 300 + 30; // card width + gap on mobile
        const setWidth = cardWidth * this.hotels.length;
        this.position = -setWidth;
        this.container.style.transform = `translateX(${this.position}px)`;

        this.startAnimation();
        this.setupHoverEvents();
    }

    startAnimation() {
        const animate = () => {
            if (!this.isPaused) {
                const cardWidth = window.innerWidth >= 640 ? 580 : 330; // card + gap
                const setWidth = cardWidth * this.hotels.length;

                if (this.direction === 'left') {
                    this.position -= this.speed;

                    // Reset to middle set when we've scrolled past the first set
                    if (this.position <= -setWidth * 2) {
                        this.position = -setWidth;
                    }
                } else {
                    this.position += this.speed;

                    // Reset to middle set when we've scrolled before the last set
                    if (this.position >= 0) {
                        this.position = -setWidth;
                    }
                }

                this.container.style.transform = `translateX(${this.position}px)`;
            }

            this.animationId = requestAnimationFrame(animate);
        };

        animate();
    }

    setupHoverEvents() {
        this.container.addEventListener('mouseenter', () => {
            this.isPaused = true;
        });

        this.container.addEventListener('mouseleave', () => {
            this.isPaused = false;
        });
    }

    scrollBy(amount) {
        if (this.disabled || !this.container) return;
        this.position += amount;
        this.container.style.transition = 'transform 0.5s ease';
        this.container.style.transform = `translateX(${this.position}px)`;

        setTimeout(() => {
            if (this.container) this.container.style.transition = 'none';
        }, 500);
    }

    stop() {
        if (this.disabled) return;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize carousels
const carousel1 = new InfiniteCarousel('marquee1', hotels1, 1.5, 'left');
const carousel2 = new InfiniteCarousel('marquee2', hotels2, 1.5, 'right');

// Setup control buttons
document.querySelectorAll('.prev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const sliderId = btn.dataset.slider;
        const carousel = sliderId === '1' ? carousel1 : carousel2;
        const scrollAmount = window.innerWidth >= 640 ? 580 : 330;
        carousel.scrollBy(scrollAmount);
    });
});

document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const sliderId = btn.dataset.slider;
        const carousel = sliderId === '1' ? carousel1 : carousel2;
        const scrollAmount = window.innerWidth >= 640 ? 580 : 330;
        carousel.scrollBy(-scrollAmount);
    });
});

// Project card showcase start here

// Lion safari camp section start here

const animateProjectContent = (slide) => {
    if (!slide) return;
    if (typeof gsap === 'undefined' || !gsap || !gsap.timeline) return;
    const tl = gsap.timeline();
    tl.fromTo(
        slide.querySelectorAll('.project-location, .project-title, .project-desc, .project-btn'),
        { x: -60, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15
        }
    );
};

const projectCarousel = document.getElementById('projectShowcaseCarousel');

if (projectCarousel) {
    projectCarousel.addEventListener('slid.bs.carousel', () => {
        const activeSlide = projectCarousel.querySelector('.carousel-item.active');
        if (activeSlide) animateProjectContent(activeSlide);
    });

    // Initial animation (only if an active slide exists)
    const initActive = projectCarousel.querySelector('.carousel-item.active');
    if (initActive) animateProjectContent(initActive);
}

// Lion safari camp section start here

// sticky project section start here

// Calculate header height and set CSS variable for sticky top offset
(function () {
    function setResortStickyTop() {
        var header = document.querySelector('.nav-head-wrap');
        var top = 20; // fallback
        if (header) {
            var rect = header.getBoundingClientRect();
            // when page is scrolled the header's rect.top may be negative; use offsetHeight instead
            top = header.offsetHeight + 12;
        }
        document.documentElement.style.setProperty('--resort-stick-top', top + 'px');
    }

    window.addEventListener('load', setResortStickyTop);
    window.addEventListener('resize', setResortStickyTop);
    // also recalc on orientation change
    window.addEventListener('orientationchange', setResortStickyTop);
})();

// sticky project section End here

// Header 'BOOK A STAY' -> trigger page-specific booking buttons when present
(function () {
    function setupHeaderBookTrigger() {
        // map page filenames to external booking URLs
        const bookingMap = {
            'trulyy-the-shakti-vilas.html': 'https://www.swiftbook.io/inst/#home?propertyId=803MjQvwfvjeUnxdJRfNQiU1RxmqyMoyr6nd3TJjo2xiq45ODA=&JDRN=Y&checkIn=2026-02-11&checkOut=2026-02-12&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-amar-mahal.html': 'https://www.swiftbook.io/inst/#home?propertyId=801MrCJScjund2zNrd6msgzKVEBRwPcAXXHpAriMKNaYjQ5Nzg=&JDRN=Y&checkIn=2026-02-09&checkOut=2026-02-11&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-maharana-bagh.html': 'https://www.swiftbook.io/inst/#home?propertyId=962MjUDSXgl2uUoeDiCIkQ9l00giHzTWmyUWsxPpOasi5QwJ98ruYQ5ODE=&JDRN=Y&checkIn=2026-02-09&checkOut=2026-02-11&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-kumbhalgarh-safari-camp.html': 'https://www.swiftbook.io/inst/#home?propertyId=461MhPgDs6dYSerqTdcCDoXvlgXjQ5NzY=&JDRN=Y&checkIn=2026-02-09&checkOut=2026-02-11&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-kumbha-residency.html': 'https://www.swiftbook.io/inst/#home?propertyId=543MjQL77WnsCus8ddHyw2aYVkY66VOas5Nzc=&JDRN=Y&checkIn=2026-02-13&checkOut=2026-02-14&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-jawai-leopard-kingdom.html': 'https://www.swiftbook.io/inst/#home?propertyId=743MjQlByGlm59cO79ygedUWYx0S4Yhm6V1NDmoc3Ky5OTY=&JDRN=Y&checkIn=2026-02-13&checkOut=2026-02-14&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'tulyy-the-jawai-leopard-kingdom.html': 'https://www.swiftbook.io/inst/#home?propertyId=743MjQlByGlm59cO79ygedUWYx0S4Yhm6V1NDmoc3Ky5OTY=&JDRN=Y&checkIn=2026-02-13&checkOut=2026-02-14&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-rudransh-inn.html': 'https://www.swiftbook.io/inst/#home?propertyId=221MBVpr1SfPnDPjQ5ODQ=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-gir-lion-safari-camp.html': 'https://www.swiftbook.io/inst/#home?propertyId=883MjQ9Ys0AgoTOlQ6wYcJe101H8Dry4UoyMnIKQJl67fVt52Z5ODU=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-black-buck-trils.html': 'https://www.swiftbook.io/inst/#home?propertyId=803MjYO2BIo2sUDYeUUm9lyIY2R9LmTOsiecZ3fALECdyg5Njk=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR'
        };

        function applyFor(headerBtn) {
            if (!headerBtn) return;

            // determine current page filename
            const pathParts = window.location.pathname.split('/');
            const currentPage = pathParts[pathParts.length - 1] || '';

            if (bookingMap[currentPage]) {
                // set header button to point to the mapped booking URL
                headerBtn.href = bookingMap[currentPage];
                headerBtn.setAttribute('target', '_blank');
                return;
            }

            // For other pages: attempt to trigger in-page booking controls
            headerBtn.addEventListener('click', function (e) {
                let target = document.querySelector('.carousel-btn, .page-book-btn, .book-now, .book-btn');

                if (!target) {
                    const candidates = Array.from(document.querySelectorAll('a, button'));
                    target = candidates.find(el => {
                        const txt = (el.textContent || el.innerText || '').trim().toLowerCase();
                        return txt === 'book a stay' || txt.includes('book a stay');
                    });
                }

                if (target) {
                    e.preventDefault();
                    try { target.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (err) {}
                    setTimeout(() => { try { target.click(); } catch (err) {} }, 300);
                }
            });
        }

        // try immediate
        const existing = document.getElementById('bookBtn');
        if (existing) { applyFor(existing); return; }

        // observe for #bookBtn if header is injected later
        const observer = new MutationObserver((mutations, obs) => {
            const btn = document.getElementById('bookBtn');
            if (btn) { applyFor(btn); obs.disconnect(); }
        });
        observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupHeaderBookTrigger);
    else setupHeaderBookTrigger();
})();

