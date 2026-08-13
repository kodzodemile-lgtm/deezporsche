document.addEventListener('DOMContentLoaded', () => {

  // 1. DYNAMIC TRANSLATION DICTIONARY
  const translations = {
    en: {
      select_region_lang: "Select Region & Language",
      gateway_subtitle: "Choose your location and language to customize your experience.",
      label_language: "Language",
      label_search_region: "Search Region or Country",
      your_selection: "Your Selection:",
      btn_enter: "Proceed to Portal",
      nav_history: "History",
      nav_lineup: "Models",
      nav_shop: "Shop",
      nav_compare: "Compare",
      nav_ai: "AI Support",
      nav_game: "Arcade",
      nav_region: "Region",
      nav_register: "Register",
      iphone_hero_title: 'Elegance Meets <span>Innovation</span>',
      iphone_hero_desc: "Discover groundbreaking mobile engineering wrapped in iconic design.",
      porsche_hero_title: 'Driven by <span>Dreams</span>',
      porsche_hero_desc: "Uncompromising sports car performance, precision engineering, and timeless design.",
      btn_explore: "Explore Models",
      btn_more_about: "Official Page",
      iphone_history_title: "History of iPhone Design",
      porsche_history_title: "History of Porsche Design",
      iphone_lineup_title: "iPhone Models",
      porsche_lineup_title: "Porsche Lineup",
      title_shop: "Showroom & Shop",
      btn_send: "Send",
      title_contact: "Contact Us",
      label_name: "Full Name",
      label_email: "Email Address",
      label_message: "Message",
      btn_send_msg: "Send Inquiry",
      title_register: "Account Registration",
      label_username: "Username",
      label_password: "Password",
      btn_create_acc: "Create Account"
    },
    de: {
      select_region_lang: "Region & Sprache wählen",
      gateway_subtitle: "Wählen Sie Ihren Standort und Ihre Sprache.",
      label_language: "Sprache",
      label_search_region: "Region oder Land suchen",
      your_selection: "Ihre Auswahl:",
      btn_enter: "Weiter zum Portal",
      nav_history: "Geschichte",
      nav_lineup: "Modelle",
      nav_shop: "Shop",
      nav_compare: "Vergleich",
      nav_ai: "KI Hilfe",
      nav_game: "Spiel",
      nav_region: "Region",
      nav_register: "Registrieren",
      iphone_hero_title: 'Eleganz trifft <span>Innovation</span>',
      iphone_hero_desc: "Entdecken Sie erstklassige Ingenieurskunst in kultigem Design.",
      porsche_hero_title: 'Angetrieben von <span>Träumen</span>',
      porsche_hero_desc: "Kompromisslose Sportwagenleistung und präzises Design.",
      btn_explore: "Modelle Erkunden",
      btn_more_about: "Offizielle Seite",
      iphone_history_title: "Geschichte des iPhone Designs",
      porsche_history_title: "Geschichte des Porsche Designs",
      iphone_lineup_title: "iPhone Modelle",
      porsche_lineup_title: "Porsche Modelle",
      title_shop: "Showroom & Shop",
      btn_send: "Senden",
      title_contact: "Kontakt aufnehmen",
      label_name: "Name",
      label_email: "E-Mail-Adresse",
      label_message: "Nachricht",
      btn_send_msg: "Nachricht Senden",
      title_register: "Konto Registrieren",
      label_username: "Benutzername",
      label_password: "Passwort",
      btn_create_acc: "Konto Erstellen"
    }
  };

  // 2. PAGE SWITCHER LOGIC (iPhone <-> Porsche)
  const mainBody = document.getElementById('mainBody');
  const siteLogo = document.getElementById('siteLogo');
  const switchPageBtn = document.getElementById('switchPageBtn');
  const switchText = document.getElementById('switchText');
  const iphonePage = document.getElementById('iphonePage');
  const porschePage = document.getElementById('porschePage');

  let currentView = 'iphone';

  switchPageBtn.addEventListener('click', () => {
    if (currentView === 'iphone') {
      currentView = 'porsche';
      iphonePage.classList.remove('active-view');
      porschePage.classList.add('active-view');
      mainBody.className = 'porsche-theme';
      siteLogo.textContent = 'Porsche';
      switchText.textContent = 'Go to iPhone';
    } else {
      currentView = 'iphone';
      porschePage.classList.remove('active-view');
      iphonePage.classList.add('active-view');
      mainBody.className = 'iphone-theme';
      siteLogo.textContent = 'iPhone';
      switchText.textContent = 'Go to Porsche';
    }
  });

  // 3. REGION GATEWAY & LANGUAGE SELECTION
  const regionGateway = document.getElementById('regionGateway');
  const languageSelect = document.getElementById('languageSelect');
  const regionSearch = document.getElementById('regionSearch');
  const selectedRegionText = document.getElementById('selectedRegionText');
  const enterSiteBtn = document.getElementById('enterSiteBtn');
  const changeRegionBtn = document.getElementById('changeRegionBtn');
  const countryLinks = document.querySelectorAll('.country-link');

  document.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('active');
    });
  });

  countryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const country = link.getAttribute('data-country');
      const continent = link.getAttribute('data-continent');
      selectedRegionText.textContent = `${continent} — ${country}`;
    });
  });

  enterSiteBtn.addEventListener('click', () => {
    regionGateway.style.display = 'none';
  });

  changeRegionBtn.addEventListener('click', () => {
    regionGateway.style.display = 'flex';
  });

  languageSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.innerHTML = dict[key];
    });
  });

  // 4. DATA COMPARISON SYSTEM
  const iphoneSpecs = {
    '17promax': { name: 'iPhone 17 Pro Max', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', price: '$1,199', chip: 'A19 Pro', display: '6.9" ProMotion OLED' },
    '17': { name: 'iPhone 17', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80', price: '$799', chip: 'A19 Bionic', display: '6.1" OLED 120Hz' },
    'air': { name: 'iPhone Air', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', price: '$999', chip: 'A19 Pro', display: '6.5" Ultra-Thin OLED' }
  };

  const porscheSpecs = {
    '911gt3rs': { name: 'Porsche 911 GT3 RS', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80', price: '$241,300', power: '518 HP', topSpeed: '184 mph' },
    'taycan': { name: 'Taycan Turbo S', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80', price: '$194,900', power: '750 HP Electric', topSpeed: '161 mph' },
    'cayman': { name: '718 Cayman GT4', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80', price: '$106,500', power: '414 HP', topSpeed: '188 mph' }
  };

  function renderCompareCard(cardId, data) {
    document.getElementById(cardId).innerHTML = `
      <img src="${data.img}" alt="${data.name}">
      <h3>${data.name}</h3>
      <ul class="stat-list">
        <li><span>Price</span> <strong>${data.price}</strong></li>
        <li><span>Performance</span> <strong>${data.chip || data.power}</strong></li>
        <li><span>Spec Note</span> <strong>${data.display || data.topSpeed}</strong></li>
      </ul>
      <button class="btn" style="width:100%;" onclick="inquirePurchase('${data.name}')">Choose to Buy</button>
    `;
  }

  document.getElementById('iphoneSelect1').addEventListener('change', (e) => renderCompareCard('iphoneCompareCard1', iphoneSpecs[e.target.value]));
  document.getElementById('iphoneSelect2').addEventListener('change', (e) => renderCompareCard('iphoneCompareCard2', iphoneSpecs[e.target.value]));
  document.getElementById('porscheSelect1').addEventListener('change', (e) => renderCompareCard('porscheCompareCard1', porscheSpecs[e.target.value]));
  document.getElementById('porscheSelect2').addEventListener('change', (e) => renderCompareCard('porscheCompareCard2', porscheSpecs[e.target.value]));

  // Initial render
  renderCompareCard('iphoneCompareCard1', iphoneSpecs['17promax']);
  renderCompareCard('iphoneCompareCard2', iphoneSpecs['17']);
  renderCompareCard('porscheCompareCard1', porscheSpecs['911gt3rs']);
  renderCompareCard('porscheCompareCard2', porscheSpecs['taycan']);

  // 5. SHOP PURCHASE INQUIRY
  window.inquirePurchase = function(modelName) {
    alert(`Thank you for choosing ${modelName}! Please fill out the contact form below to finalize your inquiry.`);
    window.location.hash = '#contact';
  };

  // 6. AI CHAT ASSISTANT
  window.handleAIChat = function(e, type) {
    e.preventDefault();
    const input = document.getElementById(type + 'Input');
    const log = document.getElementById(type + 'ChatLog');
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    // Append User Msg
    log.innerHTML += `<div class="msg user">${input.value}</div>`;
    input.value = '';

    let reply = "I am here to assist with information regarding iPhone and Porsche models!";

    if (query.includes('porsche made') || query.includes('when was porsche')) {
      reply = "Porsche was founded in <strong>1931</strong> in Stuttgart, Germany by Ferdinand Porsche.";
    } else if (query.includes('fastest iphone')) {
      reply = "The fastest iPhone models feature the <strong>A19 Pro Bionic</strong> processor found in the iPhone 17 Pro Max series.";
    } else if (query.includes('fastest porsche')) {
      reply = "The fastest production Porsche top-speed wise is the <strong>Porsche 911 GT2 RS / 911 Turbo S</strong> (reaching over 205 mph). Acceleration-wise, the <strong>Taycan Turbo S</strong> hits 0-60 mph in just 2.6s.";
    } else if (query.includes('prices of different iphone') || query.includes('iphone price')) {
      reply = "iPhone prices range from approximately <strong>$599 (iPhone 17e)</strong> to <strong>$1,199 (iPhone 17 Pro Max)</strong> depending on configuration.";
    } else if (query.includes('prices of different porsche') || query.includes('porsche price')) {
      reply = "Porsche prices range from roughly <strong>$68,300 (Macan)</strong>, <strong>$106,500 (718 Cayman GT4)</strong> up to <strong>$241,300+ (911 GT3 RS)</strong>.";
    }

    setTimeout(() => {
      log.innerHTML += `<div class="msg ai">${reply}</div>`;
      log.scrollTop = log.scrollHeight;
    }, 300);
  };

  // 7. REGISTRATION MODAL
  const modal = document.getElementById('registerModal');
  document.getElementById('openRegisterModal').onclick = () => modal.style.display = 'flex';
  document.getElementById('closeRegisterModal').onclick = () => modal.style.display = 'none';
  document.getElementById('registerForm').onsubmit = (e) => {
    e.preventDefault();
    alert('Account created successfully!');
    modal.style.display = 'none';
  };

  document.getElementById('contactForm').onsubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  };

  // 8. MINI SNAKE GAME IMPLEMENTATION
  const canvas = document.getElementById('snakeCanvas');
  const ctx = canvas.getContext('2d');
  const grid = 15;
  let count = 0;
  let score = 0;

  let snake = {
    x: 150,
    y: 150,
    dx: grid,
    dy: 0,
    cells: [{x: 150, y: 150}, {x: 135, y: 150}],
    maxCells: 4
  };

  let apple = { x: 60, y: 60 };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function resetGame() {
    score = 0;
    document.getElementById('snakeScore').textContent = score;
    snake.x = 150;
    snake.y = 150;
    snake.cells = [{x: 150, y: 150}, {x: 135, y: 150}];
    snake.maxCells = 4;
    snake.dx = grid;
    snake.dy = 0;
    apple.x = getRandomInt(0, 20) * grid;
    apple.y = getRandomInt(0, 20) * grid;
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    if (++count < 6) return; // control speed
    count = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // move snake
    snake.x += snake.dx;
    snake.y += snake.dy;

    // wrap around edges
    if (snake.x < 0) snake.x = canvas.width - grid;
    else if (snake.x >= canvas.width) snake.x = 0;
    if (snake.y < 0) snake.y = canvas.height - grid;
    else if (snake.y >= canvas.height) snake.y = 0;

    snake.cells.unshift({ x: snake.x, y: snake.y });

    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop();
    }

    // draw apple (black dot)
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(apple.x + grid/2, apple.y + grid/2, grid/2 - 1, 0, 2 * Math.PI);
    ctx.fill();

    // draw snake
    ctx.fillStyle = '#d4af37';
    snake.cells.forEach((cell, index) => {
      ctx.fillRect(cell.x, cell.y, grid - 1, grid - 1);

      // eat apple
      if (cell.x === apple.x && cell.y === apple.y) {
        snake.maxCells++;
        score += 10;
        document.getElementById('snakeScore').textContent = score;
        apple.x = getRandomInt(0, 20) * grid;
        apple.y = getRandomInt(0, 20) * grid;
      }

      // collision check with self
      for (let i = index + 1; i < snake.cells.length; i++) {
        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
          resetGame();
        }
      }
    });
  }

  // Arrow keys listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && snake.dx === 0) {
      snake.dx = -grid;
      snake.dy = 0;
    } else if (e.key === 'ArrowUp' && snake.dy === 0) {
      snake.dy = -grid;
      snake.dx = 0;
    } else if (e.key === 'ArrowRight' && snake.dx === 0) {
      snake.dx = grid;
      snake.dy = 0;
    } else if (e.key === 'ArrowDown' && snake.dy === 0) {
      snake.dy = grid;
      snake.dx = 0;
    }
  });

  document.getElementById('restartGameBtn').addEventListener('click', resetGame);

  // Start Snake Game Loop
  requestAnimationFrame(gameLoop);

});