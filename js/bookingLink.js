// bookingLink.js — Set BOOK A STAY button href based on current page
(function() {
  var bookingMap = {
    'trulyy-the-shakti-vilas': 'https://www.swiftbook.io/inst/#home?propertyId=803MjQvwfvjeUnxdJRfNQiU1RxmqyMoyr6nd3TJjo2xiq45ODA=&JDRN=Y&checkIn=2026-02-11&checkOut=2026-02-12&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-the-amar-mahal': 'https://www.swiftbook.io/inst/#home?propertyId=801MrCJScjund2zNrd6msgzKVEBRwPcAXXHpAriMKNaYjQ5Nzg=&JDRN=Y&checkIn=2026-02-09&checkOut=2026-02-11&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-the-maharana-bagh': 'https://www.swiftbook.io/inst/#home?propertyId=962MjUDSXgl2uUoeDiCIkQ9l00giHzTWmyUWsxPpOasi5QwJ98ruYQ5ODE=&JDRN=Y&checkIn=2026-02-09&checkOut=2026-02-11&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-the-kumbhalgarh-safari-camp': 'https://www.swiftbook.io/inst/#home?propertyId=461MhPgDs6dYSerqTdcCDoXvlgXjQ5NzY=&JDRN=Y&checkIn=2026-02-09&checkOut=2026-02-11&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-the-kumbha-residency': 'https://www.swiftbook.io/inst/#home?propertyId=543MjQL77WnsCus8ddHyw2aYVkY66VOas5Nzc=&JDRN=Y&checkIn=2026-02-13&checkOut=2026-02-14&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-the-jawai-leopard-kingdom': 'https://www.swiftbook.io/inst/#home?propertyId=743MjQlByGlm59cO79ygedUWYx0S4Yhm6V1NDmoc3Ky5OTY=&JDRN=Y&checkIn=2026-02-13&checkOut=2026-02-14&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'tulyy-the-jawai-leopard-kingdom': 'https://www.swiftbook.io/inst/#home?propertyId=743MjQlByGlm59cO79ygedUWYx0S4Yhm6V1NDmoc3Ky5OTY=&JDRN=Y&checkIn=2026-02-13&checkOut=2026-02-14&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-rudransh-inn': 'https://www.swiftbook.io/inst/#home?propertyId=221MBVpr1SfPnDPjQ5ODQ=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-the-gir-lion-safari-camp': 'https://www.swiftbook.io/inst/#home?propertyId=883MjQ9Ys0AgoTOlQ6wYcJe101H8Dry4UoyMnIKQJl67fVt52Z5ODU=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-the-black-buck-trails': 'https://www.swiftbook.io/inst/#home?propertyId=803MjYO2BIo2sUDYeUUm9lyIY2R9LmTOsiecZ3fALECdyg5Njk=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-the-black-buck-trils': 'https://www.swiftbook.io/inst/#home?propertyId=803MjYO2BIo2sUDYeUUm9lyIY2R9LmTOsiecZ3fALECdyg5Njk=&JDRN=Y&checkIn=2026-02-18&checkOut=2026-02-19&currency=INR&adult=2&child=0&source=localuniversal&utm_source=GoogleListing&utm_medium=free&utm_campaign=GoogleListing&m_currency=INR',
    'trulyy-the-kanooja-palace': 'https://www.swiftbook.io/inst/#home?propertyId=642NT8N2Nz9t9oHL9FS5VnC4banZeIg75MRmTY3MjM=&JDRN=Y',
  };

  function setBookingLink() {
    var cur = (location.pathname.split('/').pop() || '');
    cur = cur.replace(/\.html$/i, '').replace(/\/$/, '');
    console.log('Current page key:', cur);
    console.log('Available keys:', Object.keys(bookingMap));
    
    var btn = document.getElementById('bookBtn');
    if (!btn) {
      console.log('bookBtn not found, retrying...');
      setTimeout(setBookingLink, 100);
      return;
    }
    
    var fallbackGroupUrl = 'https://www.swiftbook.io/inst/#group?groupId=281Mvv0fhsPPeBmWbOjQ5NDM=&JDRN=Y';
    var bookUrl = bookingMap[cur] || fallbackGroupUrl;
    console.log('Current page:', cur);
    console.log('Setting button href to:', bookUrl);
    btn.href = bookUrl;
    btn.target = '_blank';
  }

  // Try immediately, and also on DOMContentLoaded in case header isn't ready yet
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setBookingLink);
  } else {
    setTimeout(setBookingLink, 100);
  }
})();
