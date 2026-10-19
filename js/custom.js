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
        name: "Trulyy The Gir Lion Safari Camp",
        location: "Sasan Gir, Gujarat",
        image: "images/glsc/trulyy-the-lion-safari-camp-home.webp",
        link: "trulyy-the-gir-lion-safari-camp.html"
    }
];

const hotels2 = [
    {
        name: "Trulyy The Shakti Vilas",
        location: "Udaipur, Rajasthan",
        image: "images/sakthi-vilas-thumb.webp",
        link: "trulyy-the-shakti-vilas.html"
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
        image: "images/blackbuck-trails-home.webp",
        link: "trulyy-the-black-buck-trails.html"
    },
    {
        name: "Trulyy The Jawai Leopard Kingdom",
        location: "Jawai, Rajasthan",
        image: "images/jawai-leopard-home.webp",
        link: "trulyy-the-jawai-leopard-kingdom.html"
    }
];

function createCard(hotel) {
    return `
                <div class="hotel-card">
                    <a href="${hotel.link}" class="hotel-card-media" style="display:block; text-decoration:none;">
                        <img src="${hotel.image}" loading="lazy" alt="${hotel.name}" class="hotel-image">
                    </a>
                    <div class="hotel-info">
                        <h2 class="hotel-name"><a href="${hotel.link}" style="color:inherit; text-decoration:none;">${hotel.name}</a></h2>
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
        this.targetPosition = null;
        this.isPaused = false;
        this.isHovered = false;
        this.animationId = null;
        this.userInteractTimer = null;
        this.touchStartX = 0;
        this.touchStartY = 0;

        // If container not present on the current page, mark disabled and skip init
        if (!this.container) {
            this.disabled = true;
            return;
        }

        this.wrapper = this.container.closest('.slider-wrapper') || this.container.parentElement;
        this.disabled = false;
        this.init();
    }

    getCardWidth() {
        const firstCard = this.container.querySelector('.hotel-card');
        if (firstCard && firstCard.offsetWidth > 0) {
            return firstCard.offsetWidth + 30; // card width + 30px gap
        }
        return window.innerWidth >= 640 ? 580 : 330;
    }

    init() {
        // Create 4 sets of cards for seamless infinite scrolling on all display widths
        const cardsHTML = this.hotels.map(createCard).join('');
        this.container.innerHTML = cardsHTML + cardsHTML + cardsHTML + cardsHTML;

        // Position at middle set
        const cardWidth = this.getCardWidth();
        const setWidth = cardWidth * this.hotels.length;
        this.position = -setWidth * 2;
        this.container.style.transform = `translateX(${this.position}px)`;

        this.startAnimation();
        this.setupHoverAndTouchEvents();
    }

    startAnimation() {
        const animate = () => {
            const cardWidth = this.getCardWidth();
            const setWidth = cardWidth * this.hotels.length;

            if (this.targetPosition !== null) {
                // Smooth interpolation towards target position on arrow click
                const diff = this.targetPosition - this.position;
                if (Math.abs(diff) > 0.5) {
                    this.position += diff * 0.14;
                } else {
                    this.position = this.targetPosition;
                    this.targetPosition = null;
                }
            } else if (!this.isPaused) {
                if (this.direction === 'left') {
                    this.position -= this.speed;
                } else {
                    this.position += this.speed;
                }
            }

            // Seamless boundary wrap in both directions
            while (this.position <= -setWidth * 3) {
                this.position += setWidth;
                if (this.targetPosition !== null) {
                    this.targetPosition += setWidth;
                }
            }
            while (this.position >= -setWidth) {
                this.position -= setWidth;
                if (this.targetPosition !== null) {
                    this.targetPosition -= setWidth;
                }
            }

            this.container.style.transform = `translateX(${this.position}px)`;
            this.animationId = requestAnimationFrame(animate);
        };

        animate();
    }

    setupHoverAndTouchEvents() {
        // Pause when mouse hovers anywhere over the slider wrapper (cards or arrow controls)
        const hoverTarget = this.wrapper || this.container;

        hoverTarget.addEventListener('mouseenter', () => {
            this.isHovered = true;
            this.isPaused = true;
        });

        hoverTarget.addEventListener('mouseleave', () => {
            this.isHovered = false;
            if (this.targetPosition === null) {
                this.isPaused = false;
            }
        });

        // Touch swipe support for mobile
        this.container.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length > 0) {
                this.touchStartX = e.touches[0].clientX;
                this.touchStartY = e.touches[0].clientY;
                this.isPaused = true;
            }
        }, { passive: true });

        this.container.addEventListener('touchend', (e) => {
            if (e.changedTouches && e.changedTouches.length > 0) {
                const diffX = e.changedTouches[0].clientX - this.touchStartX;
                const diffY = e.changedTouches[0].clientY - this.touchStartY;

                if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
                    if (diffX < 0) {
                        this.scrollNext();
                    } else {
                        this.scrollPrev();
                    }
                } else {
                    this.resumeAfterDelay(1500);
                }
            }
        }, { passive: true });
    }

    scrollBy(amount) {
        if (this.disabled || !this.container) return;
        this.isPaused = true;

        if (this.targetPosition === null) {
            this.targetPosition = this.position + amount;
        } else {
            this.targetPosition += amount;
        }

        this.resumeAfterDelay(2000);
    }

    scrollPrev() {
        const cardWidth = this.getCardWidth();
        this.scrollBy(cardWidth);
    }

    scrollNext() {
        const cardWidth = this.getCardWidth();
        this.scrollBy(-cardWidth);
    }

    resumeAfterDelay(ms = 1500) {
        clearTimeout(this.userInteractTimer);
        this.userInteractTimer = setTimeout(() => {
            if (!this.isHovered) {
                this.isPaused = false;
            }
        }, ms);
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
document.querySelectorAll('.control-btn.prev-btn, .prev-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sliderId = btn.dataset.slider;
        const carousel = sliderId === '1' ? carousel1 : carousel2;
        if (carousel) carousel.scrollPrev();
    });
});

document.querySelectorAll('.control-btn.next-btn, .next-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sliderId = btn.dataset.slider;
        const carousel = sliderId === '1' ? carousel1 : carousel2;
        if (carousel) carousel.scrollNext();
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
            'trulyy-the-shakti-vilas': 'https://www.swiftbook.io/inst/#home?propertyId=803MjQvwfvjeUnxdJRfNQiU1RxmqyMoyr6nd3TJjo2xiq45ODA=&JDRN=Y&checkIn=2026-02-11&checkOut=2026-02-12&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-amar-mahal': 'https://www.swiftbook.io/inst/#home?propertyId=801MrCJScjund2zNrd6msgzKVEBRwPcAXXHpAriMKNaYjQ5Nzg=&JDRN=Y&checkIn=2026-02-09&checkOut=2026-02-11&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-maharana-bagh': 'https://www.swiftbook.io/inst/#home?propertyId=962MjUDSXgl2uUoeDiCIkQ9l00giHzTWmyUWsxPpOasi5QwJ98ruYQ5ODE=&JDRN=Y&checkIn=2026-02-09&checkOut=2026-02-11&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-kumbhalgarh-safari-camp': 'https://www.swiftbook.io/inst/#home?propertyId=461MhPgDs6dYSerqTdcCDoXvlgXjQ5NzY=&JDRN=Y&checkIn=2026-02-09&checkOut=2026-02-11&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-kumbha-residency': 'https://www.swiftbook.io/inst/#home?propertyId=543MjQL77WnsCus8ddHyw2aYVkY66VOas5Nzc=&JDRN=Y&checkIn=2026-02-13&checkOut=2026-02-14&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-jawai-leopard-kingdom': 'https://www.swiftbook.io/inst/#home?propertyId=743MjQlByGlm59cO79ygedUWYx0S4Yhm6V1NDmoc3Ky5OTY=&JDRN=Y&checkIn=2026-02-13&checkOut=2026-02-14&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'tulyy-the-jawai-leopard-kingdom': 'https://www.swiftbook.io/inst/#home?propertyId=743MjQlByGlm59cO79ygedUWYx0S4Yhm6V1NDmoc3Ky5OTY=&JDRN=Y&checkIn=2026-02-13&checkOut=2026-02-14&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-rudransh-inn': 'https://www.swiftbook.io/inst/#home?propertyId=221MBVpr1SfPnDPjQ5ODQ=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-gir-lion-safari-camp': 'https://www.swiftbook.io/inst/#home?propertyId=883MjQ9Ys0AgoTOlQ6wYcJe101H8Dry4UoyMnIKQJl67fVt52Z5ODU=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
            'trulyy-the-black-buck-trils': 'https://www.swiftbook.io/inst/#home?propertyId=803MjYO2BIo2sUDYeUUm9lyIY2R9LmTOsiecZ3fALECdyg5Njk=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR'
        };

        function applyFor(headerBtn) {
            if (!headerBtn) return;

            // determine current page filename
            const pathParts = window.location.pathname.split('/');
            const currentPage = pathParts[pathParts.length - 1] || '';

            const fallbackGroupUrl = 'https://www.swiftbook.io/inst/#group?groupId=281Mvv0fhsPPeBmWbOjQ5NDM=&JDRN=Y';

            if (bookingMap[currentPage]) {
                // set header button to point to the mapped booking URL
                headerBtn.href = bookingMap[currentPage];
                headerBtn.setAttribute('target', '_blank');
                return;
            }

            // No page-specific mapping: use group fallback URL
            headerBtn.href = fallbackGroupUrl;
            headerBtn.setAttribute('target', '_blank');
            return;
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

// Testimonial section start here

(function () {
  const track      = document.getElementById('sliderTrack');
  const shell      = document.getElementById('sliderShell');
  const btnPrev    = document.getElementById('btnPrev');
  const btnNext    = document.getElementById('btnNext');
  const dotsWrap   = document.getElementById('stepDots');

  const TOTAL      = 5;   // total cards
  const AUTO_MS    = 4000;

  let visibleCount = 3;   // updated on resize
  let current      = 0;   // leftmost visible index
  let autoTimer    = null;

  /* ── How many cards fit? ── */
  function getVisible() {
    const w = shell.offsetWidth;
    if (w < 600)  return 1;
    if (w < 900)  return 2;
    return 3;
  }

  /* ── Max index we can scroll to ── */
  function maxIndex() {
    return Math.max(0, TOTAL - visibleCount);
  }

  /* ── Build dot indicators (one dot per "page position") ── */
  function buildDots() {
    dotsWrap.innerHTML = '';
    const max = maxIndex();
    for (let i = 0; i <= max; i++) {
      const btn = document.createElement('button');
      btn.className = 'step ' + (i === current ? 'lg' : 'sm');
      btn.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(btn);
    }
  }

  /* ── Update dot styles ── */
  function updateDots() {
    const dots = dotsWrap.querySelectorAll('.step');
    dots.forEach((d, i) => {
      d.classList.toggle('lg', i === current);
      d.classList.toggle('sm', i !== current);
    });
  }

  /* ── Compute pixel offset for current index ── */
  function calcOffset() {
    const gap     = 20;
    const cards   = track.querySelectorAll('.slide-card');
    if (!cards.length) return 0;
    const cardW   = cards[0].offsetWidth;
    return current * (cardW + gap);
  }

  /* ── Move track ── */
  function goTo(index) {
    current = Math.max(0, Math.min(index, maxIndex()));
    track.style.transform = `translateX(-${calcOffset()}px)`;
    updateButtons();
    updateDots();
  }

  /* ── Arrow states ── */
  function updateButtons() {
    btnPrev.disabled = current === 0;
    btnNext.disabled = current >= maxIndex();
  }

  /* ── Auto play ── */
  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
      const next = current < maxIndex() ? current + 1 : 0;
      goTo(next);
    }, AUTO_MS);
  }

  function stopAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  }

  /* ── Pause on hover ── */
  shell.addEventListener('mouseenter', stopAuto);
  shell.addEventListener('mouseleave', startAuto);

  /* ── Buttons ── */
  btnPrev.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  btnNext.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  /* ── Resize handler ── */
  function onResize() {
    const newVis = getVisible();
    if (newVis !== visibleCount) {
      visibleCount = newVis;
      // Clamp current so we don't over-scroll
      current = Math.min(current, maxIndex());
      buildDots();
    }
    // Always re-calculate offset (card widths change on resize)
    track.style.transition = 'none';
    track.style.transform  = `translateX(-${calcOffset()}px)`;
    requestAnimationFrame(() => {
      track.style.transition = '';
    });
    updateButtons();
  }

  window.addEventListener('resize', onResize);

  /* ── Touch / swipe support ── */
  let touchStartX = 0;
  shell.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  shell.addEventListener('touchend',   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(current + 1) : goTo(current - 1);
      startAuto();
    }
  });

  /* ── Init ── */
  visibleCount = getVisible();
  buildDots();
  goTo(0);
  startAuto();
})();
