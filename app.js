/*
  CONFIGURACIÓN PRINCIPAL
  Cuando ya quieran abrir reservaciones:
  1) Cambia bookingStatus a "available".
  2) Escribe el número de WhatsApp con código de país, sin + ni espacios. Ejemplo: 5216641234567
  3) O agrega un correo real en email.
*/
const bookingConfig = {
  bookingStatus: "soon", // "soon" o "available"
  whatsappNumber: "",
  email: "",
  propertyName: "Casa Lobos"
};

/*
  IDIOMAS
  El sitio inicia en español y el visitante puede cambiar a inglés desde el botón
  fijo de la barra superior. La preferencia se guarda en el navegador.
*/
const translations = {
  "es": {
    "metaDescription": "Casa Lobos: un espacio privado en la zona rural del Valle de Ensenada para descanso, convivencia y momentos especiales.",
    "documentTitle": "Casa Lobos | Valle de Ensenada",
    "skipLink": "Saltar al contenido",
    "navAria": "Navegación principal",
    "brandAria": "Casa Lobos, inicio",
    "menuOpen": "Abrir menú",
    "menuClose": "Cerrar menú",
    "languageToggleAria": "Cambiar idioma a inglés",
    "heroEyebrow": "Valle de Ensenada · Zona rural",
    "heroTitleMain": "Casa Lobos,",
    "heroTitleAccent": "un rincón para volver a lo esencial.",
    "heroText": "Un espacio privado para convivir, respirar aire libre y disfrutar el ritmo tranquilo del valle. Muy pronto podrás solicitar disponibilidad directamente desde aquí.",
    "bookingSoon": "Reservas próximamente",
    "bookingAvailable": "Consultar disponibilidad",
    "bookingSoonToast": "Las reservaciones estarán disponibles muy pronto.",
    "bookingContactMissing": "Agrega un número de WhatsApp o correo en app.js para activar las reservaciones.",
    "knowCasa": "Conoce Casa Lobos",
    "availabilityNote": "Estamos preparando todo para recibirte.",
    "heroLocation": "Valle de Ensenada · Zona rural",
    "heroImageAlt": "Vista principal de Casa Lobos",
    "heroFallback": "Foto principal de Casa Lobos",
    "navPlace": "El lugar",
    "navGallery": "Galería",
    "navAmenities": "Equipamiento",
    "navLocation": "Ubicación",
    "navGuardians": "Guardianes",
    "navRules": "Reglas",
    "navContact": "Contacto",
    "placeEyebrow": "El lugar",
    "placeTitleLine1": "Respira, comparte",
    "placeTitleLine2": "y hazlo ",
    "placeTitleAccent": "tuyo.",
    "placeLead": "Casa Lobos es un espacio privado en la zona rural del Valle de Ensenada, pensado para esas reuniones que se disfrutan sin prisas y con el paisaje como parte del plan.",
    "placeBody": "Tierra Santa se utiliza por ahora como referencia de la zona. En la sección de ubicación podrás consultar el punto de llegada en Google Maps; al confirmar una reservación se compartirán indicaciones de acceso, capacidad, precios y horarios.",
    "detail1Title": "Entorno rural",
    "detail1Text": "Aire libre y paisaje del valle",
    "detail2Title": "Espacio privado",
    "detail2Text": "Convivencia a tu propio ritmo",
    "detail3Title": "Reservación previa",
    "detail3Text": "Disponibilidad por confirmar",
    "locationEyebrow": "Ubicación",
    "locationTitleLine1": "Encuentra el camino",
    "locationTitleLine2": "hacia ",
    "locationTitleAccent": "Casa Lobos.",
    "locationText": "Casa Lobos se encuentra en la zona rural del Valle de Ensenada, cerca de Tierra Santa. Consulta el punto de llegada y planea tu visita con anticipación.",
    "locationDetail1Title": "Valle de Ensenada",
    "locationDetail1Text": "Zona rural · Tierra Santa",
    "locationDetail2Title": "Antes de salir",
    "locationDetail2Text": "Confirma acceso y detalles de tu visita",
    "mapButton": "Ver en Google Maps",
    "mapButtonAria": "Abrir ubicación de Casa Lobos en Google Maps",
    "locationMapAria": "Mapa de ubicación de Casa Lobos",
    "mapIframeTitle": "Ubicación de Casa Lobos en Google Maps",
    "mapFloatingAria": "Abrir ubicación en Google Maps",
    "mapFloatingTitle": "Casa Lobos",
    "mapFloatingText": "Abrir ubicación",
    "galleryEyebrow": "Galería",
    "galleryTitleLine1": "Una primera mirada",
    "galleryTitleLine2": "a ",
    "galleryTitleAccent": "Casa Lobos.",
    "galleryText": "Estos espacios quedan listos para mostrar los rincones reales del terreno: acceso, áreas de convivencia, vista general y esos atardeceres que hacen especial al valle.",
    "gallery1Label": "Vista general",
    "gallery1Caption": "Vista general de Casa Lobos",
    "gallery1Alt": "Vista general de Casa Lobos",
    "gallery1Fallback": "Vista general de Casa Lobos",
    "gallery2Label": "Garage",
    "gallery2Caption": "Garage de Casa Lobos",
    "gallery2Alt": "Garage de Casa Lobos",
    "gallery2Fallback": "Garage de Casa Lobos",
    "gallery3Label": "Área exterior",
    "gallery3Caption": "Área exterior",
    "gallery3Alt": "Área exterior de Casa Lobos",
    "gallery3Fallback": "Área exterior",
    "gallery4Label": "Rincón especial",
    "gallery4Caption": "Un rincón para convivir",
    "gallery4Alt": "Rincón de convivencia en Casa Lobos",
    "gallery4Fallback": "Rincón para convivir",
    "gallery5Label": "Momentos especiales",
    "gallery5Caption": "Momentos especiales en el valle",
    "gallery5Alt": "Atardecer en Casa Lobos",
    "gallery5Fallback": "Atardeceres del valle",
    "amenitiesEyebrow": "Equipamiento",
    "amenitiesTitleLine1": "Lo que encontrarás",
    "amenitiesTitleLine2": "en tu ",
    "amenitiesTitleAccent": "visita.",
    "amenitiesText": "Esta sección queda lista para mostrar con claridad todo lo que se incluye en Casa Lobos. Cuando definan cada detalle real, sustituimos estas descripciones.",
    "amenity1Title": "Áreas del terreno",
    "amenity1Text": "Agrega aquí las zonas disponibles: área principal, jardín, parte techada, salón, terraza o cualquier rincón especial.",
    "amenity2Title": "Convivencia",
    "amenity2Text": "Mesas, sillas, asador, fogatero, alberca, juegos o cualquier elemento que haga cómoda la reunión.",
    "amenity3Title": "Servicios básicos",
    "amenity3Text": "Incluye información confirmada sobre baño, agua, electricidad, estacionamiento, señal o internet.",
    "amenity4Title": "Llegada y acceso",
    "amenity4Text": "Indicaciones de llegada, portón, estacionamiento y puntos importantes se comparten antes de la visita.",
    "guardiansEyebrow": "Casa Lobos",
    "guardiansTitleLine1": "Conoce a nuestros",
    "guardiansTitleAccent": "guardianes.",
    "guardiansText": "Ellos también son parte de Casa Lobos. Al llegar, encontrarás a una hembra y un macho que cuidan el espacio y le dan personalidad al lugar.",
    "guardiansNote": "Toca cualquier foto para verla completa. Cada guardián cuenta con dos espacios para mostrar sus mejores momentos.",
    "guardian1Sex": "HEMBRA",
    "guardian1Kicker": "Nuestra guardiana",
    "guardian1Text": "Una de las anfitrionas de Casa Lobos. Sus dos fotos se pueden abrir a tamaño completo para conocerla mejor.",
    "guardian1Photo1Aria": "Abrir primera foto de Jesusa",
    "guardian1Photo2Aria": "Abrir segunda foto de Jesusa",
    "guardian1Photo1Caption": "Jesusa · Casa Lobos · Foto 1",
    "guardian1Photo2Caption": "Jesusa · Casa Lobos · Foto 2",
    "guardian1Photo1Alt": "Jesusa, guardiana de Casa Lobos, foto 1",
    "guardian1Photo2Alt": "Jesusa, guardiana de Casa Lobos, foto 2",
    "guardian1Photo1Fallback": "Primera foto de Jesusa",
    "guardian1Photo2Fallback": "Segunda foto de Jesusa",
    "guardian2Sex": "MACHO",
    "guardian2Kicker": "Nuestro guardián",
    "guardian2Text": "También forma parte de la bienvenida en Casa Lobos. Sus fotos se abren en grande desde cualquier dispositivo.",
    "guardian2Photo1Aria": "Abrir primera foto de Hash",
    "guardian2Photo2Aria": "Abrir segunda foto de Hash",
    "guardian2Photo1Caption": "Hash · Casa Lobos · Foto 1",
    "guardian2Photo2Caption": "Hash · Casa Lobos · Foto 2",
    "guardian2Photo1Alt": "Hash, guardián de Casa Lobos, foto 1",
    "guardian2Photo2Alt": "Hash, guardián de Casa Lobos, foto 2",
    "guardian2Photo1Fallback": "Primera foto de Hash",
    "guardian2Photo2Fallback": "Segunda foto de Hash",
    "rulesEyebrow": "Para todos",
    "rulesTitleLine1": "Buenas reglas,",
    "rulesTitleAccent": "buenos recuerdos.",
    "rulesText": "Casa Lobos es un espacio de aire libre. Estas reglas ayudan a que cada grupo disfrute el terreno con libertad, seguridad y respeto por el lugar.",
    "rule1Title": "Cuida Casa Lobos",
    "rule1Text": "Respeta instalaciones, áreas verdes, mobiliario y cualquier zona que se indique como privada o no disponible.",
    "rule2Title": "Convivencia al aire libre",
    "rule2Text": "Disfruta la música y la reunión con consideración hacia tu grupo, los guardianes y el entorno rural. No hay una regla estricta de ruido, pero evita excesos que afecten la experiencia.",
    "rule3Title": "Basura en su lugar",
    "rule3Text": "Recoge residuos, utiliza los contenedores asignados y deja el espacio en buenas condiciones al finalizar tu visita.",
    "rule4Title": "Cuida el entorno",
    "rule4Text": "No cortes plantas, no dañes áreas naturales y mantén vehículos únicamente en las zonas que se indiquen para estacionamiento o circulación.",
    "rule5Title": "Respeta a los guardianes",
    "rule5Text": "No los alimentes ni los sueltes sin autorización. Sigue las indicaciones sobre portones, convivencia y áreas destinadas para ellos.",
    "rule6Title": "Consulta antes de confirmar",
    "rule6Text": "Informa el número de personas, tipo de reunión, invitados extra, mascotas, equipo especial o cualquier actividad adicional antes de reservar.",
    "reservationEyebrow": "Reservaciones",
    "reservationTitleLine1": "Muy pronto podrás",
    "reservationTitleLine2": "apartar tu ",
    "reservationTitleAccent": "fecha.",
    "reservationText": "Estamos afinando los últimos detalles de Casa Lobos. Cuando la agenda esté disponible, podrás consultar fechas por WhatsApp o correo desde este mismo sitio.",
    "bookingNote": "El botón se habilitará al abrir agenda.",
    "footerText": "Un espacio privado para disfrutar el aire libre del Valle de Ensenada.",
    "footerCopyrightSymbol": "©",
    "footerCopyrightText": "Casa Lobos. Todos los derechos reservados.",
    "footerLocation": "Valle de Ensenada · Zona rural",
    "lightboxAria": "Vista ampliada de imagen",
    "lightboxClose": "Cerrar galería",
    "lightboxPrev": "Imagen anterior",
    "lightboxNext": "Imagen siguiente"
  },
  "en": {
    "metaDescription": "Casa Lobos: a private space in the rural Ensenada Valley for rest, gatherings, and special moments.",
    "documentTitle": "Casa Lobos | Ensenada Valley",
    "skipLink": "Skip to content",
    "navAria": "Main navigation",
    "brandAria": "Casa Lobos, home",
    "menuOpen": "Open menu",
    "menuClose": "Close menu",
    "languageToggleAria": "Cambiar idioma a español",
    "heroEyebrow": "Ensenada Valley · Rural setting",
    "heroTitleMain": "Casa Lobos,",
    "heroTitleAccent": "a place to return to what matters.",
    "heroText": "A private place to gather, breathe fresh air, and enjoy the valley at its own unhurried pace. Soon you will be able to check availability directly from here.",
    "bookingSoon": "Reservations coming soon",
    "bookingAvailable": "Check availability",
    "bookingSoonToast": "Reservations will be available very soon.",
    "bookingContactMissing": "Add a WhatsApp number or email in app.js to activate reservations.",
    "knowCasa": "Discover Casa Lobos",
    "availabilityNote": "We are getting everything ready to welcome you.",
    "heroLocation": "Ensenada Valley · Rural setting",
    "heroImageAlt": "Main view of Casa Lobos",
    "heroFallback": "Main photo of Casa Lobos",
    "navPlace": "The place",
    "navGallery": "Gallery",
    "navAmenities": "Amenities",
    "navLocation": "Location",
    "navGuardians": "Guardians",
    "navRules": "Rules",
    "navContact": "Contact",
    "placeEyebrow": "The place",
    "placeTitleLine1": "Breathe, gather,",
    "placeTitleLine2": "and make it ",
    "placeTitleAccent": "your own.",
    "placeLead": "Casa Lobos is a private space in the rural Ensenada Valley, created for gatherings that are enjoyed without rushing, with the landscape as part of the plan.",
    "placeBody": "Tierra Santa is currently used as a reference for the area. In the location section, you can view the arrival point in Google Maps; once a reservation is confirmed, you will receive access directions, capacity, rates, and schedule details.",
    "detail1Title": "Rural setting",
    "detail1Text": "Fresh air and valley views",
    "detail2Title": "Private space",
    "detail2Text": "Gather at your own pace",
    "detail3Title": "Advance booking",
    "detail3Text": "Availability to be confirmed",
    "locationEyebrow": "Location",
    "locationTitleLine1": "Find the road",
    "locationTitleLine2": "to ",
    "locationTitleAccent": "Casa Lobos.",
    "locationText": "Casa Lobos is in the rural Ensenada Valley, near Tierra Santa. View the arrival point and plan your visit ahead of time.",
    "locationDetail1Title": "Ensenada Valley",
    "locationDetail1Text": "Rural setting · Tierra Santa",
    "locationDetail2Title": "Before you go",
    "locationDetail2Text": "Confirm access and visit details",
    "mapButton": "View in Google Maps",
    "mapButtonAria": "Open Casa Lobos location in Google Maps",
    "locationMapAria": "Casa Lobos location map",
    "mapIframeTitle": "Casa Lobos location in Google Maps",
    "mapFloatingAria": "Open location in Google Maps",
    "mapFloatingTitle": "Casa Lobos",
    "mapFloatingText": "Open location",
    "galleryEyebrow": "Gallery",
    "galleryTitleLine1": "A first look",
    "galleryTitleLine2": "at ",
    "galleryTitleAccent": "Casa Lobos.",
    "galleryText": "These spaces are ready to showcase the real corners of the property: access, gathering areas, sweeping views, and the sunsets that make the valley special.",
    "gallery1Label": "General view",
    "gallery1Caption": "General view of Casa Lobos",
    "gallery1Alt": "General view of Casa Lobos",
    "gallery1Fallback": "General view of Casa Lobos",
    "gallery2Label": "Garage",
    "gallery2Caption": "Casa Lobos garage",
    "gallery2Alt": "Casa Lobos garage",
    "gallery2Fallback": "Casa Lobos garage",
    "gallery3Label": "Outdoor area",
    "gallery3Caption": "Outdoor area",
    "gallery3Alt": "Outdoor area at Casa Lobos",
    "gallery3Fallback": "Outdoor area",
    "gallery4Label": "Special corner",
    "gallery4Caption": "A corner to gather",
    "gallery4Alt": "Gathering corner at Casa Lobos",
    "gallery4Fallback": "A corner to gather",
    "gallery5Label": "Special moments",
    "gallery5Caption": "Special moments in the valley",
    "gallery5Alt": "Sunset at Casa Lobos",
    "gallery5Fallback": "Valley sunsets",
    "amenitiesEyebrow": "Amenities",
    "amenitiesTitleLine1": "What you will find",
    "amenitiesTitleLine2": "during your ",
    "amenitiesTitleAccent": "visit.",
    "amenitiesText": "This section is ready to clearly show everything included at Casa Lobos. Once every real detail is confirmed, these descriptions can be updated.",
    "amenity1Title": "Property areas",
    "amenity1Text": "Add the available spaces here: main area, garden, covered area, hall, terrace, or any special corner.",
    "amenity2Title": "Gathering spaces",
    "amenity2Text": "Tables, chairs, grill, fire pit, pool, games, or any element that helps make the gathering comfortable.",
    "amenity3Title": "Basic services",
    "amenity3Text": "Include confirmed information about restroom, water, electricity, parking, mobile signal, or internet.",
    "amenity4Title": "Arrival and access",
    "amenity4Text": "Arrival directions, gate details, parking, and important notes are shared before your visit.",
    "guardiansEyebrow": "Casa Lobos",
    "guardiansTitleLine1": "Meet our",
    "guardiansTitleAccent": "guardians.",
    "guardiansText": "They are part of Casa Lobos too. When you arrive, you will meet one female and one male guardian who care for the space and give the place its personality.",
    "guardiansNote": "Tap any photo to view it full size. Each guardian has two spaces to share their best moments.",
    "guardian1Sex": "FEMALE",
    "guardian1Kicker": "Our guardian",
    "guardian1Text": "One of Casa Lobos’ hosts. Her two photos can be opened full size so you can get to know her better.",
    "guardian1Photo1Aria": "Open Jesusa's first photo",
    "guardian1Photo2Aria": "Open Jesusa's second photo",
    "guardian1Photo1Caption": "Jesusa · Casa Lobos · Photo 1",
    "guardian1Photo2Caption": "Jesusa · Casa Lobos · Photo 2",
    "guardian1Photo1Alt": "Jesusa, guardian of Casa Lobos, photo 1",
    "guardian1Photo2Alt": "Jesusa, guardian of Casa Lobos, photo 2",
    "guardian1Photo1Fallback": "Jesusa's first photo",
    "guardian1Photo2Fallback": "Jesusa's second photo",
    "guardian2Sex": "MALE",
    "guardian2Kicker": "Our guardian",
    "guardian2Text": "He is also part of the welcome at Casa Lobos. His photos open large from any device.",
    "guardian2Photo1Aria": "Open Hash's first photo",
    "guardian2Photo2Aria": "Open Hash's second photo",
    "guardian2Photo1Caption": "Hash · Casa Lobos · Photo 1",
    "guardian2Photo2Caption": "Hash · Casa Lobos · Photo 2",
    "guardian2Photo1Alt": "Hash, guardian of Casa Lobos, photo 1",
    "guardian2Photo2Alt": "Hash, guardian of Casa Lobos, photo 2",
    "guardian2Photo1Fallback": "Hash's first photo",
    "guardian2Photo2Fallback": "Hash's second photo",
    "rulesEyebrow": "For everyone",
    "rulesTitleLine1": "Good rules,",
    "rulesTitleAccent": "great memories.",
    "rulesText": "Casa Lobos is an outdoor space. These rules help every group enjoy the property with freedom, safety, and respect for the place.",
    "rule1Title": "Take care of Casa Lobos",
    "rule1Text": "Respect the facilities, green areas, furnishings, and any area marked as private or unavailable.",
    "rule2Title": "Outdoor gatherings",
    "rule2Text": "Enjoy music and your gathering with consideration for your group, the guardians, and the rural setting. There is no strict noise rule, but please avoid excess that may affect the experience.",
    "rule3Title": "Put trash in its place",
    "rule3Text": "Collect your waste, use the assigned bins, and leave the space in good condition when your visit ends.",
    "rule4Title": "Care for the surroundings",
    "rule4Text": "Do not cut plants, damage natural areas, or drive outside the spaces designated for parking and circulation.",
    "rule5Title": "Respect the guardians",
    "rule5Text": "Do not feed or let them loose without permission. Follow the instructions for gates, interactions, and their designated areas.",
    "rule6Title": "Ask before confirming",
    "rule6Text": "Tell us the number of guests, type of gathering, extra visitors, pets, special equipment, or any additional activity before booking.",
    "reservationEyebrow": "Reservations",
    "reservationTitleLine1": "Soon you will be able",
    "reservationTitleLine2": "to save your ",
    "reservationTitleAccent": "date.",
    "reservationText": "We are putting the final touches on Casa Lobos. Once the calendar is available, you will be able to check dates by WhatsApp or email from this same site.",
    "bookingNote": "The button will be enabled once the calendar opens.",
    "footerText": "A private space to enjoy the fresh air of the Ensenada Valley.",
    "footerCopyrightSymbol": "©",
    "footerCopyrightText": "Casa Lobos. All rights reserved.",
    "footerLocation": "Ensenada Valley · Rural setting",
    "lightboxAria": "Expanded image view",
    "lightboxClose": "Close gallery",
    "lightboxPrev": "Previous image",
    "lightboxNext": "Next image"
  }
};

let currentLanguage = "es";
try {
  const savedLanguage = window.localStorage.getItem("casaLobosLanguage");
  if (savedLanguage === "en" || savedLanguage === "es") currentLanguage = savedLanguage;
} catch (error) {
  // El sitio sigue funcionando aunque el navegador bloquee el almacenamiento local.
}

const t = (key) => translations[currentLanguage]?.[key] ?? translations.es[key] ?? key;

const languageToggle = document.querySelector("#languageToggle");
const languageToggleLabel = document.querySelector("#languageToggleLabel");

const applyTranslations = () => {
  document.documentElement.lang = currentLanguage === "en" ? "en" : "es-MX";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  const translatedAttributes = ["aria-label", "alt", "fallback-label", "caption", "content"];
  translatedAttributes.forEach((attribute) => {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
      const key = element.getAttribute(`data-i18n-${attribute}`);
      const value = t(key);

      if (attribute === "caption") {
        element.dataset.caption = value;
      } else {
        element.setAttribute(attribute, value);
      }
    });
  });

  if (languageToggle && languageToggleLabel) {
    const nextLanguage = currentLanguage === "es" ? "EN" : "ES";
    languageToggleLabel.textContent = nextLanguage;
    languageToggle.setAttribute("aria-pressed", String(currentLanguage === "en"));
    languageToggle.title = t("languageToggleAria");
  }

  updateBookingState();

  if (lightbox?.classList.contains("active")) {
    updateLightbox();
  }
};

languageToggle?.addEventListener("click", () => {
  currentLanguage = currentLanguage === "es" ? "en" : "es";

  try {
    window.localStorage.setItem("casaLobosLanguage", currentLanguage);
  } catch (error) {
    // No se requiere almacenamiento para cambiar el idioma en la visita actual.
  }

  applyTranslations();
  setMenuState(false);
});

const fallbackSVG = (label) => {
  const cleanLabel = String(label || t("heroFallback")).replace(/[<>&"']/g, "");
  const instruction = currentLanguage === "en" ? "ADD A REAL PHOTO HERE" : "AGREGA AQUÍ UNA FOTO REAL";
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#c5d0bd"/>
        <stop offset="1" stop-color="#809174"/>
      </linearGradient>
      <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#1b281a" flood-opacity=".16"/></filter>
    </defs>
    <rect width="1600" height="1000" fill="url(#bg)"/>
    <circle cx="1320" cy="170" r="230" fill="#e8d9ab" fill-opacity=".35"/>
    <path d="M0 700C240 570 420 670 670 590s390-160 930 20v390H0Z" fill="#52674c" fill-opacity=".72"/>
    <path d="M0 800c280-120 466-57 686-116s390-201 914-87v403H0Z" fill="#314630" fill-opacity=".8"/>
    <g transform="translate(800 470)" text-anchor="middle" filter="url(#shadow)">
      <text y="-35" font-family="Georgia,serif" font-size="58" fill="#f8f6f0" font-style="italic">${cleanLabel}</text>
      <text y="22" font-family="Arial,sans-serif" font-size="20" fill="#f8f6f0" letter-spacing="5">${instruction}</text>
      <line x1="-125" y1="52" x2="125" y2="52" stroke="#f8f6f0" stroke-opacity=".7"/>
    </g>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

// Fallback visual: la página sigue viéndose bien aun antes de reemplazar las fotos.
document.querySelectorAll(".property-image").forEach((image) => {
  image.addEventListener("error", () => {
    image.src = fallbackSVG(image.dataset.fallbackLabel || image.alt);
  }, { once: true });
});

// Menú móvil
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

const setMenuState = (isOpen) => {
  if (!menuToggle || !navLinks) return;

  navLinks.classList.toggle("open", isOpen);
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", t(isOpen ? "menuClose" : "menuOpen"));
};

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    setMenuState(!navLinks.classList.contains("open"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

// Animaciones discretas al entrar en pantalla
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Galería / lightbox
// Cada grupo conserva su propia navegación: la galería del terreno no se mezcla con las fotos de cada guardián.
const lightboxItems = [...document.querySelectorAll(".lightbox-trigger")];
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const closeLightboxButton = document.querySelector(".lightbox-close");
const previousButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");
let activeItems = [];
let activeImageIndex = 0;

const updateLightbox = () => {
  const item = activeItems[activeImageIndex];
  if (!item) return;

  const image = item.querySelector("img");
  if (!image || !lightboxImage || !lightboxCaption) return;

  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = item.dataset.caption || image.alt;
};

const openLightbox = (item) => {
  const group = item.dataset.lightboxGroup || "default";
  activeItems = lightboxItems.filter((candidate) => (candidate.dataset.lightboxGroup || "default") === group);
  activeImageIndex = Math.max(0, activeItems.indexOf(item));
  updateLightbox();

  lightbox?.classList.add("active");
  lightbox?.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  closeLightboxButton?.focus();
};

const closeLightbox = () => {
  lightbox?.classList.remove("active");
  lightbox?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
};

lightboxItems.forEach((item) => item.addEventListener("click", () => openLightbox(item)));
closeLightboxButton?.addEventListener("click", closeLightbox);
previousButton?.addEventListener("click", () => {
  if (!activeItems.length) return;
  activeImageIndex = (activeImageIndex - 1 + activeItems.length) % activeItems.length;
  updateLightbox();
});
nextButton?.addEventListener("click", () => {
  if (!activeItems.length) return;
  activeImageIndex = (activeImageIndex + 1) % activeItems.length;
  updateLightbox();
});
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (event) => {
  if (!lightbox?.classList.contains("active")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") previousButton?.click();
  if (event.key === "ArrowRight") nextButton?.click();
});

// Reservaciones: bloqueadas por ahora, listas para activar más adelante.
const toast = document.querySelector("#toast");
let toastTimer;
const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3600);
};

const bookingButtons = document.querySelectorAll("#bookingButton, #bookingButtonBottom");

const updateBookingState = () => {
  const isAvailable = bookingConfig.bookingStatus === "available";

  bookingButtons.forEach((button) => {
    button.classList.toggle("is-disabled", !isAvailable);
    button.setAttribute("aria-disabled", String(!isAvailable));

    const label = button.querySelector(".booking-label");
    if (label) label.textContent = t(isAvailable ? "bookingAvailable" : "bookingSoon");
  });
};

const handleBooking = () => {
  if (bookingConfig.bookingStatus !== "available") {
    showToast(t("bookingSoonToast"));
    return;
  }

  const contactByWhatsApp = bookingConfig.whatsappNumber.trim();
  const contactByEmail = bookingConfig.email.trim();
  const messageText = currentLanguage === "en"
    ? `Hello, I would like information and availability to reserve ${bookingConfig.propertyName}.`
    : `Hola, me gustaría solicitar información y disponibilidad para reservar ${bookingConfig.propertyName}.`;
  const message = encodeURIComponent(messageText);

  if (contactByWhatsApp) {
    window.open(`https://wa.me/${contactByWhatsApp}?text=${message}`, "_blank", "noopener");
  } else if (contactByEmail) {
    const subject = currentLanguage === "en"
      ? `Reservation - ${bookingConfig.propertyName}`
      : `Reserva - ${bookingConfig.propertyName}`;
    window.location.href = `mailto:${contactByEmail}?subject=${encodeURIComponent(subject)}&body=${message}`;
  } else {
    showToast(t("bookingContactMissing"));
  }
};

bookingButtons.forEach((button) => button.addEventListener("click", handleBooking));

// Año automático en footer
const currentYear = document.querySelector("#currentYear");
if (currentYear) currentYear.textContent = new Date().getFullYear();

// Aplicar el idioma elegido después de preparar todos los componentes de la página.
applyTranslations();
