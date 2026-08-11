document.addEventListener('DOMContentLoaded', () => {
  
  // 1. REGION & LANGUAGE SELECTION LOGIC
  const regionGateway = document.getElementById('regionGateway');
  const regionSearch = document.getElementById('regionSearch');
  const regionBtns = document.querySelectorAll('.region-btn');
  const regionItems = document.querySelectorAll('.region-item');
  const countryLinks = document.querySelectorAll('.country-link');
  const enterSiteBtn = document.getElementById('enterSiteBtn');
  const changeRegionBtn = document.getElementById('changeRegionBtn');
  const selectedRegionBadge = document.getElementById('selectedRegionBadge');
  const languageSelect = document.getElementById('languageSelect');

  let selectedLocation = 'Global';
  let selectedLang = 'EN';

  regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const countryList = btn.nextElementSibling;
      countryList.classList.toggle('active');
    });
  });

  countryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      selectedLocation = link.textContent;
      updateBadge();
      regionGateway.style.display = 'none';
    });
  });

  regionSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    regionItems.forEach(item => {
      const regionName = item.getAttribute('data-region');
      const countries = Array.from(item.querySelectorAll('.country-link')).map(c => c.textContent.toLowerCase());
      const countryList = item.querySelector('.country-list');

      const matchesRegion = regionName.includes(query);
      const matchesCountry = countries.some(c => c.includes(query));

      if (matchesRegion || matchesCountry) {
        item.style.display = 'block';
        if (query.length > 1) {
          countryList.classList.add('active');
        }
      } else {
        item.style.display = 'none';
      }
    });
  });

  languageSelect.addEventListener('change', (e) => {
    selectedLang = e.target.value.toUpperCase();
    updateBadge();
  });

  enterSiteBtn.addEventListener('click', () => {
    regionGateway.style.display = 'none';
    updateBadge();
  });

  changeRegionBtn.addEventListener('click', () => {
    regionGateway.style.display = 'flex';
  });

  function updateBadge() {
    selectedRegionBadge.textContent = `Region: ${selectedLocation} | Lang: ${selectedLang}`;
  }


  // 2. MODEL COMPARISON LOGIC
  const carsData = {
    '911': {
      name: 'Porsche 911 Carrera',
      img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80',
      price: '$114,400',
      horsepower: '379 HP',
      acceleration: '4.0 sec (0–60 mph)',
      topSpeed: '182 mph',
      drivetrain: 'Rear-Wheel Drive / Rear-Engine'
    },
    '718': {
      name: 'Porsche 718 Cayman',
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      price: '$68,300',
      horsepower: '300 HP',
      acceleration: '4.9 sec (0–60 mph)',
      topSpeed: '170 mph',
      drivetrain: 'Rear-Wheel Drive / Mid-Engine'
    },
    'taycan': {
      name: 'Porsche Taycan',
      img: 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=600&q=80',
      price: '$99,400',
      horsepower: '402 HP',
      acceleration: '4.5 sec (0–60 mph)',
      topSpeed: '143 mph',
      drivetrain: 'Rear-Wheel Drive / Electric Motor'
    },
    'panamera': {
      name: 'Porsche Panamera',
      img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
      price: '$102,800',
      horsepower: '348 HP',
      acceleration: '5.0 sec (0–60 mph)',
      topSpeed: '169 mph',
      drivetrain: 'Rear-Wheel Drive / Front-Engine'
    },
    'cayenne': {
      name: 'Porsche Cayenne',
      img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80',
      price: '$79,200',
      horsepower: '348 HP',
      acceleration: '5.7 sec (0–60 mph)',
      topSpeed: '154 mph',
      drivetrain: 'All-Wheel Drive / Front-Engine'
    },
    'macan': {
      name: 'Porsche Macan',
      img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
      price: '$62,900',
      horsepower: '261 HP',
      acceleration: '6.0 sec (0–60 mph)',
      topSpeed: '144 mph',
      drivetrain: 'All-Wheel Drive / Front-Engine'
    }
  };

  const carSelect1 = document.getElementById('carSelect1');
  const carSelect2 = document.getElementById('carSelect2');
  const compareCard1 = document.getElementById('compareCard1');
  const compareCard2 = document.getElementById('compareCard2');

  function renderCompareCard(cardElement, carKey) {
    const car = carsData[carKey];
    cardElement.innerHTML = `
      <img src="${car.img}" alt="${car.name}">
      <h3>${car.name}</h3>
      <ul class="stat-list">
        <li><span>Starting Price</span> <strong>${car.price}</strong></li>
        <li><span>Horsepower</span> <strong>${car.horsepower}</strong></li>
        <li><span>0–60 mph</span> <strong>${car.acceleration}</strong></li>
        <li><span>Top Speed</span> <strong>${car.topSpeed}</strong></li>
        <li><span>Drivetrain</span> <strong>${car.drivetrain}</strong></li>
      </ul>
      <button class="compare-buy-btn" onclick="inquirePurchase('${car.name}')">Select To Buy</button>
    `;
  }

  carSelect1.addEventListener('change', (e) => renderCompareCard(compareCard1, e.target.value));
  carSelect2.addEventListener('change', (e) => renderCompareCard(compareCard2, e.target.value));

  // Initial Compare Render
  renderCompareCard(compareCard1, '911');
  renderCompareCard(compareCard2, '718');


  // 3. SHOP INQUIRY BUTTONS
  const buyBtns = document.querySelectorAll('.buy-btn');
  buyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const model = btn.getAttribute('data-model');
      inquirePurchase(model);
    });
  });

  window.inquirePurchase = function(modelName) {
    alert(`Thank you for choosing the ${modelName}! Please fill out the contact form below to complete your sales inquiry.`);
    window.location.hash = '#contact';
  };


  // 4. AI CHATBOT LOGIC
  const chatForm = document.getElementById('chatForm');
  const userInput = document.getElementById('userInput');
  const chatWindow = document.getElementById('chatWindow');

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = userInput.value.trim();
    if (!query) return;

    appendMessage(query, 'user');
    userInput.value = '';

    setTimeout(() => {
      const response = getAIResponse(query);
      appendMessage(response, 'ai');
    }, 400);
  });

  function appendMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.innerHTML = text;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function getAIResponse(input) {
    const query = input.toLowerCase();

    if (query.includes('made') || query.includes('founded') || query.includes('created') || query.includes('start') || query.includes('when')) {
      return "Porsche was founded on April 25, 1931, in Stuttgart, Germany, by Ferdinand Porsche. The first official Porsche vehicle, the Porsche 356, was built in 1948 by his son, Ferry Porsche.";
    }

    if (query.includes('fastest') || query.includes('speed') || query.includes('quickest')) {
      return "The fastest production Porsche by top speed is the <strong>Porsche 918 Spyder</strong>, reaching a top speed of <strong>214 mph (344 km/h)</strong>. Among current 911 road cars, the <strong>911 Turbo S</strong> reaches 205 mph.";
    }

    if (query.includes('price') || query.includes('cost') || query.includes('how much') || query.includes('prices')) {
      return "Here is the starting price range for major Porsche models:<br>" +
             "• <strong>Macan:</strong> ~$62,900+<br>" +
             "• <strong>718 Cayman / Boxster:</strong> ~$68,300+<br>" +
             "• <strong>Cayenne:</strong> ~$79,200+<br>" +
             "• <strong>Taycan (EV):</strong> ~$99,400+<br>" +
             "• <strong>Panamera:</strong> ~$102,800+<br>" +
             "• <strong>911:</strong> ~$114,400+";
    }

    return "I am trained to answer general questions about Porsche heritage and specifications. Try asking: <br>• 'When was Porsche made?'<br>• 'What is the fastest Porsche?'<br>• 'What are Porsche prices?'";
  }


  // 5. REGISTRATION MODAL LOGIC
  const modal = document.getElementById('registerModal');
  const openBtn = document.getElementById('openRegisterModal');
  const closeBtn = document.getElementById('closeRegisterModal');
  const registerForm = document.getElementById('registerForm');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account registration successful! Welcome to the Porsche community.');
    modal.style.display = 'none';
    registerForm.reset();
  });


  // 6. CONTACT FORM LOGIC
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! A Porsche representative will respond to your message shortly.');
    contactForm.reset();
  });

});