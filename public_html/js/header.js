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
                <a href="trulyy-the-shakti-vilas.html" class="nav-dropdown-item">Trulyy The Shakti Vilas <small class='d-block text-primary'>Udaipur</small></a>
              </div>
              <div class="mega-column">
               <a href="trulyy-the-maharana-bagh.html" class="nav-dropdown-item">Trulyy The Maharana Bagh <small class='d-block text-primary'>Udaipur</small></a>
                <a href="ramada-by-wyndham.html" class="nav-dropdown-item">Ramada by Wyndham <small class='d-block text-primary'>Jaisalmer</small></a>
                <a href="trulyy-the-amar-mahal.html" class="nav-dropdown-item">Trulyy The Amar Mahal <small class='d-block text-primary'>Udaipur</small></a>
                <!-- <a href="trulyy-the-mayur-palace.html" class="nav-dropdown-item">Trulyy The Mayur Palace <small class='d-block text-primary'>Udaipur</small></a>
                <a href="trulyy-rudransh-inn.html" class="nav-dropdown-item">Trulyy Rudransh Inn <small class='d-block text-primary'>Jodhpur</small></a> -->
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
            <a href="trulyy-the-black-buck-trails.html" class="nav-dropdown-item">Trulyy The Blackbuck Trails <small class='d-block text-primary'>Velavadar</small></a>
            <a href="trulyy-the-gir-lion-safari-camp.html" class="nav-dropdown-item">Trulyy The Gir Lion Safari Camp <small class='d-block text-primary'>Sasan Gir</small></a>
            <a href="trulyy-the-jawai-leopard-kingdom.html" class="nav-dropdown-item">Trulyy The Jawai Leopard Kingdom <small class='d-block text-primary'>Jawai</small></a>
            <a href="trulyy-the-kumbhalgarh-safari-camp.html" class="nav-dropdown-item">Trulyy The Kumbhalgarh Safari Camp <small class='d-block text-primary'>Kumbhalgarh</small></a>
          </div>
        </div>

        
<!-- Preferred Hotels -->
        <div class="nav-item-wrapper">
          <a href="#" class="nav-item">
            Business Hotels <span class="arrow">▼</span>
          </a>
          <div class="nav-dropdown">
            <!-- <a href="trulyy-rudransh-inn.html" class="nav-dropdown-item">Trulyy Rudransh Inn <small class='d-block text-primary'>Jodhpur</small></a> -->
          </div>
        </div>
        
      </div>

      <div class="logo">
        <a href="/"><img src="images/logo.webp" alt="Trulyy India"></a>
      </div>

      <div class="navbar-right">

      <!-- Preferred Menu -->
        <div class="nav-item-wrapper">
          <a href="#" class="nav-item">
            Preferred Hotels <span class="arrow">▼</span>
          </a>
          <div class="nav-dropdown">
            <a href="fort-aranya.html" class="nav-dropdown-item">Fort Aranya <small class='d-block text-primary'>Sam Sand Dunes</small></a>
          </div>
        </div> 

      <a href="https://7vowsevent.com/" target="_blank" class="nav-item">Weddings & Events</a>
        
      <!-- More Menu -->
        <div class="nav-item-wrapper">
          <a href="#" class="nav-item">
            More <span class="arrow">▼</span>
          </a>
          <div class="nav-dropdown">
          <a href="about.html" class="nav-dropdown-item">About</a>
          <a href="contact.html" class="nav-dropdown-item">Contact</a>
          <a href="#" class="nav-dropdown-item">Blogs</a>
          <a href="partner-with-trulyy-india.html" class="nav-dropdown-item">Partner with Us</a>
          <a href="pet-friendly-stays-at-trulyy.html" class="nav-dropdown-item">We Are Pet Friendly</a>
            <a href="trulyy-india-faqs.html" class="nav-dropdown-item">Faq's</a>
            <a href="careers.html" class="nav-dropdown-item">Careers</a>
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
         <!-- <a href="trulyy-the-mayur-palace.html" class="mobile-dropdown-item">The Mayur Palace, Udaipur</a> -->
          <!-- <a href="trulyy-rudransh-inn.html" class="mobile-dropdown-item">Trulyy Rudransh Inn, Jodhpur</a> -->
        </div>
      </div>

      <!-- Wildlife Resorts -->
      <div class="mobile-nav-item">
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">
          Luxury Wildlife Resorts <span class="arrow">▼</span>
        </div>
        <div class="mobile-dropdown">
          <a href="trulyy-the-black-buck-trails.html" class="mobile-dropdown-item">Trulyy The Blackbuck Trails, Velavadar</a>
          <a href="trulyy-the-gir-lion-safari-camp.html" class="mobile-dropdown-item">Trulyy The Gir Lion Safari Camp, Sasan Gir</a>
          <a href="trulyy-the-jawai-leopard-kingdom.html" class="mobile-dropdown-item">Trulyy The Jawai Leopard Kingdom, Jawai</a>
          <a href="trulyy-the-kumbhalgarh-safari-camp.html" class="mobile-dropdown-item">Trulyy The Kumbhalgarh Safari Camp, Kumbhalgarh</a>
        </div>
      </div>

      <!-- Luxury Hotels -->
      <div class="mobile-nav-item">
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">
          Business Hotels <span class="arrow">▼</span>
        </div>
        <div class="mobile-dropdown">
          <!--<a href="trulyy-rudransh-inn.html" class="mobile-dropdown-item">Trulyy Rudransh Inn, Jodhpur</a> -->
        </div>
      </div>

      <div class="mobile-nav-item">
        <a href="https://7vowsevent.com/" target="_blank" class="mobile-nav-link">Weddings & Events</a>
      </div>

      

      <!-- Simple Links 
      <div class="mobile-nav-item">
        <a href="about.html" class="mobile-nav-link">About Us</a>
      </div>
      <div class="mobile-nav-item">
        <a href="contact.html" class="mobile-nav-link">Contact</a>
      </div>-->
      
      <!-- Preferred Menu -->
      <div class="mobile-nav-item">
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">
          Preferred Hotels <span class="arrow">▼</span>
        </div>
        <div class="mobile-dropdown">
          <a href="fort-aranya.html" class="mobile-dropdown-item">Fort Aranya, Sam Sand Dunes</a>
        </div>
      </div> 
<!-- More Menu -->
      <div class="mobile-nav-item">
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)">
          MORE <span class="arrow">▼</span>
        </div>
        <div class="mobile-dropdown">
        <a href="about.html" class="mobile-dropdown-item">About Us</a>
        <a href="contact.html" class="mobile-dropdown-item">Contact</a>
        <a href="#" class="mobile-dropdown-item">Blogs</a>
        <a href="partner-with-trulyy-india.html" class="mobile-dropdown-item">Partner with Us</a>
        <a href="pet-friendly-stays-at-trulyy.html" class="mobile-dropdown-item">We Are Pet Friendly</a>
        <a href="trulyy-india-faqs.html" class="mobile-dropdown-item">Faq's</a>
          <a href="careers.html" class="mobile-dropdown-item">Careers</a>
        </div>
      </div>
    </div>

  </header>
  `;

  function injectHeader() {
    var placeholder = document.getElementById('site-header');
    if (placeholder) {
      placeholder.innerHTML = headerHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
    // Load booking link script after header is injected
    var script = document.createElement('script');
    script.src = 'js/bookingLink.js';
    document.body.appendChild(script);
  }

  // Inject header immediately so other scripts (eg. js/custom.js)
  // can find `#navbar`, `#hamburger`, `#mobileMenu` when they run.
  try { injectHeader(); } catch (e) { document.addEventListener('DOMContentLoaded', injectHeader); }

})();
