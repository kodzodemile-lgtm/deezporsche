document.addEventListener('DOMContentLoaded', () => {

  // TRANSLATION DICTIONARY
  const translations = {
    en: {
      select_region_lang: "Select Region & Language",
      gateway_subtitle: "Choose your location and preferred language to enter the Porsche Experience.",
      label_language: "Language",
      label_search_region: "Search Region or Country",
      your_selection: "Your Selection:",
      btn_enter: "Proceed to Website",
      nav_history: "History",
      nav_designers: "Designers",
      nav_lineup: "Lineup",
      nav_compare: "Compare",
      nav_shop: "Shop",
      nav_ai: "Porsche AI",
      nav_contact: "Contact",
      nav_region: "Region / Lang",
      nav_register: "Register",
      hero_title: 'Driven by <span>Dreams</span>',
      hero_desc: "Engineered with precision, designed for performance, and built on timeless heritage.",
      btn_explore: "Explore Lineup",
      btn_shop: "Go to Shop",
      btn_official: "Official Porsche Page",
      title_history: "Brand History",
      hist_1_title: "1931 — The Founding",
      hist_1_desc: "Founded by Ferdinand Porsche in Stuttgart, Germany. The company initially provided vehicle development and engineering consultation before producing its own sports cars.",
      hist_2_title: "1948 — Porsche 356",
      hist_2_desc: "Ferry Porsche, son of Ferdinand, created the first vehicle to bear the Porsche nameplate—the 356. It laid the foundation for lightweight, precise sports cars.",
      hist_3_title: "1963 — The 911 Icon",
      hist_3_desc: "Unveiled at the Frankfurt Motor Show, the legendary rear-engine 911 was introduced, cementing Porsche's signature identity and racing pedigree.",
      title_designers: "Design Pioneers",
      des_1_desc: "The engineering visionary who established the firm and pioneered aerodynamic, rear-engine vehicle concepts that shaped modern automotive design.",
      des_2_desc: "Grandson of the founder, Ferdinand Alexander 'Butzi' Porsche styled the timeless silhouette of the original 911, establishing Porsche's design language.",
      des_3_desc: "Porsche’s Chief Designer (since 2004), responsible for evolving classic proportions into modern electric and hybrid eras with models like the Taycan.",
      title_models: "Model Lineup",
      tag_911: "The Iconic Sports Car",
      desc_911: "Timeless silhouette featuring rear-engine dynamics, precision driving, and race-bred heritage.",
      more_about_911: "More About 911",
      more_about_718: "More About 718",
      tag_taycan: "All-Electric Performance",
      desc_taycan: "Advanced 800-volt electric powertrain delivering instant torque and sports car acceleration.",
      more_about_taycan: "More About Taycan",
      tag_panamera: "Luxury Performance Sedan",
      desc_panamera: "Combines track-capable dynamics with four-door executive luxury and grand touring comfort.",
      more_about_panamera: "More About Panamera",
      tag_cayenne: "Luxury SUV",
      desc_cayenne: "Full-size luxury SUV combining high performance, off-road capabilities, and daily utility.",
      more_about_cayenne: "More About Cayenne",
      tag_macan: "Compact SUV",
      desc_macan: "A compact crossover engineered to offer sporty handling alongside flexible everyday functionality.",
      more_about_macan: "More About Macan",
      title_compare: "Model Comparison Tool",
      subtitle_compare: "Select two Porsche models to compare specifications and performance side-by-side.",
      label_vehicle_1: "Select Vehicle 1",
      label_vehicle_2: "Select Vehicle 2",
      title_shop: "Porsche Showroom & Shop",
      subtitle_shop: "Browse current models, explore baseline configurations, and request purchasing details.",
      btn_inquire: "Inquire to Buy",
      title_ai: "Porsche Knowledge Assistant",
      btn_send: "Send",
      title_contact: "Get In Touch",
      label_name: "Full Name",
      label_email: "Email Address",
      label_message: "Message",
      btn_send_msg: "Send Message",
      title_register: "Create Porsche Account",
      label_username: "Username",
      label_password: "Password",
      btn_create_acc: "Create Account"
    },
    de: {
      select_region_lang: "Region & Sprache wählen",
      gateway_subtitle: "Wählen Sie Ihren Standort und Ihre bevorzugte Sprache, um das Porsche-Erlebnis zu starten.",
      label_language: "Sprache",
      label_search_region: "Region oder Land suchen",
      your_selection: "Ihre Auswahl:",
      btn_enter: "Weiter zur Website",
      nav_history: "Geschichte",
      nav_designers: "Designer",
      nav_lineup: "Modelle",
      nav_compare: "Vergleich",
      nav_shop: "Shop",
      nav_ai: "Porsche KI",
      nav_contact: "Kontakt",
      nav_region: "Region / Sprache",
      nav_register: "Registrieren",
      hero_title: 'Angetrieben von <span>Träumen</span>',
      hero_desc: "Mit Präzision entwickelt, auf Leistung ausgelegt und auf zeitloser Tradition aufgebaut.",
      btn_explore: "Modelle Entdecken",
      btn_shop: "Zum Shop",
      btn_official: "Offizielle Porsche Seite",
      title_history: "Markengeschichte",
      hist_1_title: "1931 — Die Gründung",
      hist_1_desc: "Gegründet von Ferdinand Porsche in Stuttgart. Das Unternehmen bot zunächst Fahrzeugentwicklung und Ingenieurberatung an.",
      hist_2_title: "1948 — Porsche 356",
      hist_2_desc: "Ferry Porsche schuf das erste Fahrzeug mit dem Namen Porsche—den 356. Er legte den Grundstein für leichte Sportwagen.",
      hist_3_title: "1963 — Die Ikone 911",
      hist_3_desc: "Auf der IAA vorgestellt, wurde der legendäre Heckmotor-911 eingeführt und prägte die Porsche-Identität.",
      title_designers: "Design-Pioniere",
      des_1_desc: "Der Visionär, der das Unternehmen gründete und aerodynamische Heckmotorkonzepte entwickelte.",
      des_2_desc: "Entwarf die zeitlose Silhouette des ursprünglichen 911 und begründete die Porsche-Designsprache.",
      des_3_desc: "Porsches Chefdesigner seit 2004, verantwortlich für die Entwicklung moderner Elektro- und Hybridmodelle.",
      title_models: "Modellpalette",
      tag_911: "Der ikonische Sportwagen",
      desc_911: "Zeitlose Silhouette mit Heckmotor-Dynamik und Rennsport-Genen.",
      more_about_911: "Mehr zum 911",
      more_about_718: "Mehr zum 718",
      tag_taycan: "Vollelektrische Leistung",
      desc_taycan: "Fortschrittlicher 800-Volt-Elektroantrieb für sofortiges Drehmoment.",
      more_about_taycan: "Mehr zum Taycan",
      tag_panamera: "Luxus-Sportlimousine",
      desc_panamera: "Kombiniert Rennstreckendynamik mit Viertürer-Luxus.",
      more_about_panamera: "Mehr zum Panamera",
      tag_cayenne: "Luxus-SUV",
      desc_cayenne: "Großes Luxus-SUV, das hohe Leistung mit Geländegängigkeit verbindet.",
      more_about_cayenne: "Mehr zum Cayenne",
      tag_macan: "Kompakt-SUV",
      desc_macan: "Ein Kompakt-Crossover für sportliches Handling im Alltag.",
      more_about_macan: "Mehr zum Macan",
      title_compare: "Modell-Vergleichs-Tool",
      subtitle_compare: "Wählen Sie zwei Porsche-Modelle aus, um Technische Daten zu vergleichen.",
      label_vehicle_1: "Fahrzeug 1 wählen",
      label_vehicle_2: "Fahrzeug 2 wählen",
      title_shop: "Porsche Showroom & Shop",
      subtitle_shop: "Durchsuchen Sie aktuelle Modelle und fordern Sie Kaufdetails an.",
      btn_inquire: "Kaufanfrage",
      title_ai: "Porsche Wissensassistent",
      btn_send: "Senden",
      title_contact: "Kontaktieren Sie uns",
      label_name: "Vollständiger Name",
      label_email: "E-Mail-Adresse",
      label_message: "Nachricht",
      btn_send_msg: "Nachricht Senden",
      title_register: "Porsche Konto Erstellen",
      label_username: "Benutzername",
      label_password: "Passwort",
      btn_create_acc: "Konto Erstellen"
    },
    fr: {
      select_region_lang: "Sélectionnez la région et la langue",
      gateway_subtitle: "Choisissez votre emplacement et votre langue pour entrer dans l'expérience Porsche.",
      label_language: "Langue",
      label_search_region: "Rechercher une région ou un pays",
      your_selection: "Votre Sélection:",
      btn_enter: "Accéder au site",
      nav_history: "Histoire",
      nav_designers: "Designers",
      nav_lineup: "Gamme",
      nav_compare: "Comparer",
      nav_shop: "Boutique",
      nav_ai: "IA Porsche",
      nav_contact: "Contact",
      nav_region: "Région / Langue",
      nav_register: "S'inscrire",
      hero_title: 'Mû par des <span>Rêves</span>',
      hero_desc: "Conçu avec précision, pensé pour la performance et bâti sur un héritage intemporel.",
      btn_explore: "Explorer la gamme",
      btn_shop: "Aller à la boutique",
      btn_official: "Page officielle Porsche",
      title_history: "Histoire de la marque",
      hist_1_title: "1931 — La Fondation",
      hist_1_desc: "Fondée par Ferdinand Porsche à Stuttgart. L'entreprise proposait initialement des conseils en ingénierie.",
      hist_2_title: "1948 — Porsche 356",
      hist_2_desc: "Ferry Porsche a créé le premier véhicule portant le nom de Porsche : la 356.",
      hist_3_title: "1963 — L'icône 911",
      hist_3_desc: "Présentée au Salon de Francfort, la légendaire 911 à moteur arrière est née.",
      title_designers: "Pionniers du Design",
      des_1_desc: "Le visionnaire de l'ingénierie qui a fondé l'entreprise et conçu les concepts de moteur arrière.",
      des_2_desc: "Créateur de la silhouette intemporelle de la 911 originale.",
      des_3_desc: "Designer en chef de Porsche depuis 2004, responsable des modèles modernes comme la Taycan.",
      title_models: "Gamme de Modèles",
      tag_911: "La voiture de sport emblématique",
      desc_911: "Silhouette intemporelle avec dynamique de moteur arrière et précision de conduite.",
      more_about_911: "En savoir plus sur la 911",
      more_about_718: "En savoir plus sur la 718",
      tag_taycan: "Performance 100% électrique",
      desc_taycan: "Motorisation électrique 800 volts offrant un couple instantané.",
      more_about_taycan: "En savoir plus sur la Taycan",
      tag_panamera: "Berline de luxe performante",
      desc_panamera: "Allie dynamique de piste et confort haut de gamme à quatre portes.",
      more_about_panamera: "En savoir plus sur la Panamera",
      tag_cayenne: "SUV de luxe",
      desc_cayenne: "SUV haut de gamme combinant hautes performances et polyvalence.",
      more_about_cayenne: "En savoir plus sur le Cayenne",
      tag_macan: "SUV compact",
      desc_macan: "Un crossover compact conçu pour une conduite sportive au quotidien.",
      more_about_macan: "En savoir plus sur le Macan",
      title_compare: "Outil de comparaison",
      subtitle_compare: "Sélectionnez deux modèles Porsche pour comparer leurs caractéristiques.",
      label_vehicle_1: "Sélectionner Véhicule 1",
      label_vehicle_2: "Sélectionner Véhicule 2",
      title_shop: "Showroom et Boutique",
      subtitle_shop: "Parcourez nos modèles actuels et demandez des informations d'achat.",
      btn_inquire: "Demander à acheter",
      title_ai: "Assistant Porsche",
      btn_send: "Envoyer",
      title_contact: "Contactez-nous",
      label_name: "Nom complet",
      label_email: "Adresse e-mail",
      label_message: "Message",
      btn_send_msg: "Envoyer le message",
      title_register: "Créer un compte",
      label_username: "Nom d'utilisateur",
      label_password: "Mot de passe",
      btn_create_acc: "Créer un compte"
    },
    es: {
      select_region_lang: "Seleccionar Región e Idioma",
      gateway_subtitle: "Elija su ubicación e idioma preferido para ingresar a la Experiencia Porsche.",
      label_language: "Idioma",
      label_search_region: "Buscar Región o País",
      your_selection: "Su Selección:",
      btn_enter: "Continuar al sitio",
      nav_history: "Historia",
      nav_designers: "Diseñadores",
      nav_lineup: "Gama",
      nav_compare: "Comparar",
      nav_shop: "Tienda",
      nav_ai: "IA Porsche",
      nav_contact: "Contacto",
      nav_region: "Región / Idioma",
      nav_register: "Registrarse",
      hero_title: 'Impulsado por <span>Sueños</span>',
      hero_desc: "Diseñado con precisión, concebido para el rendimiento y construido sobre una herencia eterna.",
      btn_explore: "Explorar gama",
      btn_shop: "Ir a la tienda",
      btn_official: "Página oficial de Porsche",
      title_history: "Historia de la marca",
      hist_1_title: "1931 — La Fundación",
      hist_1_desc: "Fundada por Ferdinand Porsche en Stuttgart, Alemania. La empresa ofrecía consultoría de ingeniería.",
      hist_2_title: "1948 — Porsche 356",
      hist_2_desc: "Ferry Porsche creó el primer vehículo con la marca Porsche: el 356.",
      hist_3_title: "1963 — El icono 911",
      hist_3_desc: "Presentado en el Salón de Fráncfort, nació el legendario 911 de motor trasero.",
      title_designers: "Líderes de Diseño",
      des_1_desc: "El visionario de la ingeniería que creó la firma y desarrolló conceptos aerodinámicos.",
      des_2_desc: "Diseñó la silueta atemporal del 911 original.",
      des_3_desc: "Diseñador jefe de Porsche desde 2004, responsable de modelos modernos como el Taycan.",
      title_models: "Gama de Modelos",
      tag_911: "El deportivo icónico",
      desc_911: "Silueta atemporal con motor trasero y dinamismo de carreras.",
      more_about_911: "Más sobre el 911",
      more_about_718: "Más sobre el 718",
      tag_taycan: "Rendimiento 100% Eléctrico",
      desc_taycan: "Avanzado tren motriz de 800 voltios con aceleración instantánea.",
      more_about_taycan: "Más sobre el Taycan",
      tag_panamera: "Sedán de lujo",
      desc_panamera: "Combina dinamismo de pista con lujo de cuatro puertas.",
      more_about_panamera: "Más sobre el Panamera",
      tag_cayenne: "SUV de lujo",
      desc_cayenne: "SUV de lujo de tamaño completo que combina alto rendimiento y utilidad.",
      more_about_cayenne: "Más sobre el Cayenne",
      tag_macan: "SUV compacto",
      desc_macan: "Un crossover compacto diseñado para un manejo deportivo cotidiano.",
      more_about_macan: "Más sobre el Macan",
      title_compare: "Herramienta de Comparación",
      subtitle_compare: "Seleccione dos modelos Porsche para comparar especificaciones lado a lado.",
      label_vehicle_1: "Seleccionar Vehículo 1",
      label_vehicle_2: "Seleccionar Vehículo 2",
      title_shop: "Exposición y Tienda",
      subtitle_shop: "Examine los modelos actuales y solicite detalles de compra.",
      btn_inquire: "Consultar compra",
      title_ai: "Asistente Porsche",
      btn_send: "Enviar",
      title_contact: "Póngase en contacto",
      label_name: "Nombre completo",
      label_email: "Correo electrónico",
      label_message: "Mensaje",
      btn_send_msg: "Enviar mensaje",
      title_register: "Crear Cuenta",
      label_username: "Nombre de usuario",
      label_password: "Contraseña",
      btn_create_acc: "Crear Cuenta"
    }
  };

  // 1. REGION & LANGUAGE SELECTION LOGIC
  const regionGateway = document.getElementById('regionGateway');
  const regionSearch = document.getElementById('regionSearch');
  const regionBtns = document.querySelectorAll('.region-btn');
  const regionItems = document.querySelectorAll('.region-item');
  const countryLinks = document.querySelectorAll('.country-link');
  const enterSiteBtn = document.getElementById('enterSiteBtn');
  const changeRegionBtn = document.getElementById('changeRegionBtn');
  const selectedRegionBadge = document.getElementById('selectedRegionBadge');
  const selectedRegionText = document.getElementById('selectedRegionText');
  const languageSelect = document.getElementById('languageSelect');

  let selectedContinent = 'Global';
  let selectedCountry = 'Global';
  let selectedLang = 'en';

  regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const countryList = btn.nextElementSibling;
      countryList.classList.toggle('active');
    });
  });

  countryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      selectedContinent = link.getAttribute('data-continent');
      selectedCountry = link.getAttribute('data-country');
      selectedRegionText.textContent = `${selectedContinent} — ${selectedCountry}`;
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
    selectedLang = e.target.value;
    applyLanguage(selectedLang);
  });

  enterSiteBtn.addEventListener('click', () => {
    regionGateway.style.display = 'none';
    updateBadge();
  });

  changeRegionBtn.addEventListener('click', () => {
    regionGateway.style.display = 'flex';
  });

  function updateBadge() {
    const locationStr = selectedCountry !== 'Global' ? `${selectedContinent} (${selectedCountry})` : 'Global';
    selectedRegionBadge.textContent = `Region: ${locationStr} | Lang: ${selectedLang.toUpperCase()}`;
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    updateBadge();
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
        <li><span>Price</span> <strong>${car.price}</strong></li>
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