// header.js — master header file for all pages
(function () {
  var headerHTML = `
  <header class="nav-head-wrap">
    <nav class="navbar" id="navbar">
      <!-- Hamburger Menu -->
      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="navbar-left">

      <!-- Boutique Hotels -->
        <div class="nav-item-wrapper">
          <a href="#" class="nav-item" aria-haspopup="true" aria-expanded="false">
            Luxury Boutique Resorts <span class="arrow">▼</span>
          </a>
          <div class="nav-dropdown mega" role="menu" aria-label="Luxury Boutique Resorts">
            <div class="mega-grid">
              <div class="mega-column">
                <a href="trulyy-the-kanooja-palace.html" class="nav-dropdown-item">Trulyy The Kanooja Palace <small class='d-block text-primary'>Kumbhalgarh</small></a>
                <a href="trulyy-the-kumbha-residency.html" class="nav-dropdown-item">Trulyy The Kumbha Residency <small class='d-block text-primary'>Kumbhalgarh</small></a>
                <a href="trulyy-the-shakti-vilas.html" class="nav-dropdown-item">Trulyy The Shakti Villas <small class='d-block text-primary'>Udaipur</small></a>
                <a href="trulyy-the-amar-mahal.html" class="nav-dropdown-item">Trulyy The Amar Mahal <small class='d-block text-primary'>Udaipur</small></a>
              </div>
              <div class="mega-column">
                <a href="trulyy-the-maharana-bagh.html" class="nav-dropdown-item">Trulyy The Maharana Bagh <small class='d-block text-primary'>Udaipur</small></a>
                <a href="ramada-by-wyndham.html" class="nav-dropdown-item">Ramada by Wyndham <small class='d-block text-primary'>Jaisalmer</small></a>
                <a href="#" class="nav-dropdown-item">The Mayur Palace <small class='d-block text-primary'>Udaipur</small></a>
                <a href="trulyy-rudransh-inn.html" class="nav-dropdown-item">Trulyy Rudransh Inn <small class='d-block text-primary'>Jodhpur</small></a>
              </div>
            </div>
          </div>
        </div>

        <!-- Wildlife Resorts -->
        <div class="nav-item-wrapper">
          <a href="#" class="nav-item">
            Luxury Wildlife Resorts <span class="arrow">▼</span>
          </a>
          <div class="nav-dropdown">
            <a href="trulyy-the-black-buck-trils.html" class="nav-dropdown-item">Trulyy The Blackbuck Trails <small class='d-block text-primary'>Gujarat</small></a>
            <a href="trulyy-the-gir-lion-safari-camp.html" class="nav-dropdown-item">Trulyy The Gir Lion Safari Camp <small class='d-block text-primary'>Sasan Gir</small></a>
            <a href="trulyy-the-jawai-leopard-kingdom.html" class="nav-dropdown-item">Trulyy The Jawai Leopard Kingdom <small class='d-block text-primary'>Jawai</small></a>
            <a href="trulyy-the-kumbhalgarh-safari-camp.html" class="nav-dropdown-item">Trulyy The Kumbhalgarh Safari Camp <small class='d-block text-primary'>Kumbhalgarh</small></a>
          </div>
        </div>

        <!-- Preferred Hotels -->
        <div class="nav-item-wrapper">
          <a href="#" class="nav-item">
            Preferred Hotels <span class="arrow">▼</span>
          </a>
          <div class="nav-dropdown">
            <a href="https://www.aranyanatureretreat.com/" target="_blank" class="nav-dropdown-item">Aranya Nature Resort <small class='d-block text-primary'>Ranthambore</small></a>
            <a href="fort-aranya.html" class="nav-dropdown-item">Fort Aranya <small class='d-block text-primary'>Sam Sand Dunes</small></a>
          </div>
        </div>

        
      </div>

      <div class="logo">
        <a href="/"><img src="images/logo.webp" alt="Trulyy India"></a>
      </div>

      <div class="navbar-right">
        <a href="#" class="nav-item">Weddings & Events</a>
       

        <!-- More Menu -->
        <div class="nav-item-wrapper">
          <a href="#" class="nav-item">
            Wedding Partner <span class="arrow">▼</span>
          </a>
          <div class="nav-dropdown">
            <a href="abheygarh-by-alsisar-hotels.html" class="nav-dropdown-item">Abheygrah by Alsisar Hotels</a>
          </div>
        </div>

        <!-- More Menu -->
        <div class="nav-item-wrapper">
          <a href="#" class="nav-item">
            More <span class="arrow">▼</span>
          </a>
          <div class="nav-dropdown">
            <a href="about.html" class="nav-dropdown-item">About Us</a>
            <a href="contact.html" class="nav-dropdown-item">Contact</a>
            <a href="partner-with-trulyy-india.html" class="nav-dropdown-item">Partner with Us</a>
            <a href="trulyy-india-faqs.html" class="nav-dropdown-item">Faq's</a>
            <a href="#" class="nav-dropdown-item">Awards</a>
            <a href="#" class="nav-dropdown-item">Careers</a>
          </div>
        </div>

        <a id="bookBtn" href="#" target="_blank" class="book-btn text-decoration-none">BOOK A STAY</a>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">

<!-- Boutique Hotels -->
      <div class="mobile-nav-item">
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">
          Luxury Boutique Resorts <span class="arrow">▼</span>
        </div>
        <div class="mobile-dropdown">
          <a href="trulyy-the-kanooja-palace.html" class="mobile-dropdown-item">Trulyy The Kanooja Palace, Kumbhalgarh</a>
          <a href="trulyy-the-kumbha-residency.html" class="mobile-dropdown-item">Trulyy The Kumbha Residency, Kumbhalgarh</a>
          <a href="trulyy-the-shakti-vilas.html" class="mobile-dropdown-item">Trulyy The Shakti Villas, Udaipur</a>
          <a href="trulyy-the-amar-mahal.html" class="mobile-dropdown-item">Trulyy The Amar Mahal, Udaipur</a>
          <a href="trulyy-the-maharana-bagh.html" class="mobile-dropdown-item">Trulyy The Maharana Bagh, Udaipur</a>
          <a href="ramada-by-wyndham.html" class="mobile-dropdown-item">Ramada by Wyndham, Jaisalmer</a>
          <a href="#" class="mobile-dropdown-item">The Mayur Palace, Udaipur</a>
          <a href="trulyy-rudransh-inn.html" class="mobile-dropdown-item">Trulyy Rudransh Inn, Jodhpur</a>
        </div>
      </div>

      <!-- Wildlife Resorts -->
      <div class="mobile-nav-item">
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">
          Luxury Wildlife Resorts <span class="arrow">▼</span>
        </div>
        <div class="mobile-dropdown">
          <a href="trulyy-the-black-buck-trils.html" class="mobile-dropdown-item">Trulyy The Blackbuck Trails, Gujarat</a>
          <a href="trulyy-the-gir-lion-safari-camp.html" class="mobile-dropdown-item">Trulyy The Gir Lion Safari Camp, Sasan Gir</a>
          <a href="trulyy-the-jawai-leopard-kingdom.html" class="mobile-dropdown-item">Trulyy The Jawai Leopard Kingdom, Jawai</a>
          <a href="trulyy-the-kumbhalgarh-safari-camp.html" class="mobile-dropdown-item">Trulyy The Kumbhalgarh Safari Camp, Kumbhalgarh</a>
        </div>
      </div>

      <!-- Heritage Hotels -->
      <div class="mobile-nav-item">
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">
          Preferred Hotels <span class="arrow">▼</span>
        </div>
        <div class="mobile-dropdown">
          <a href="https://www.aranyanatureretreat.com/" target="_blank" class="mobile-dropdown-item">Aranya Nature Resort, Ranthambore</a>
          <a href="fort-aranya.html" class="mobile-dropdown-item">Fort Aranya, Sam Sand Dunes</a>
        </div>
      </div>

      

      <!-- Simple Links -->
      <div class="mobile-nav-item">
        <a href="https://7vowsevent.com/" target="_blank" class="mobile-nav-link">Weddings & Events</a>
      </div>
      <!-- More Menu -->
      <div class="mobile-nav-item">
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">
          Wedding Partner <span class="arrow">▼</span>
        </div>
        <div class="mobile-dropdown">
          <a href="abheygarh-by-alsisar-hotels.html" class="mobile-dropdown-item">Abheygrah by Alsisar Hotels</a>
        </div>
      </div>
<!-- More Menu -->
      <div class="mobile-nav-item">
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">
          MORE <span class="arrow">▼</span>
        </div>
        <div class="mobile-dropdown">
          <a href="about.html" class="mobile-dropdown-item">About</a>
          <a href="contact.html" class="mobile-dropdown-item">Contact</a>
          <a href="partner-with-trulyy-india.html" class="mobile-dropdown-item">Partner With Us</a>
          <a href="trulyy-india-faqs.html" class="mobile-dropdown-item">Faq's</a>
          <a href="#" class="mobile-dropdown-item">Awards</a>
          <a href="#" class="mobile-dropdown-item">Careers</a>
        </div>
      </div>
    </div>
    <script>
      (function(){
        try {
          var bookingMap = {
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
          var cur = (location.pathname.split('/').pop() || '');
          var btn = document.getElementById('bookBtn');
          if (btn && bookingMap[cur]) {
            btn.href = bookingMap[cur];
            btn.target = '_blank';
          }
        } catch (e) { /* silent */ }
      })();
    <\/script>
  </header>
  `;

  function injectHeader() {
    var placeholder = document.getElementById('site-header');
    if (placeholder) {
      placeholder.innerHTML = headerHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
  }

  // Inject header immediately so other scripts (eg. js/custom.js)
  // can find `#navbar`, `#hamburger`, `#mobileMenu` when they run.
  try { injectHeader(); } catch (e) { document.addEventListener('DOMContentLoaded', injectHeader); }

})();
