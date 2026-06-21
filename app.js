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

const fallbackSVG = (label) => {
  const cleanLabel = String(label || "Foto del lugar").replace(/[<>&"']/g, "");
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
      <text y="22" font-family="Arial,sans-serif" font-size="20" fill="#f8f6f0" letter-spacing="5">AGREGA AQUÍ UNA FOTO REAL</text>
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
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
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
  if (!image) return;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = item.dataset.caption || image.alt;
};

const openLightbox = (item) => {
  const group = item.dataset.lightboxGroup || "default";
  activeItems = lightboxItems.filter((candidate) => (candidate.dataset.lightboxGroup || "default") === group);
  activeImageIndex = Math.max(0, activeItems.indexOf(item));
  updateLightbox();
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  closeLightboxButton?.focus();
};

const closeLightbox = () => {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
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
const activateBooking = () => {
  const contactByWhatsApp = bookingConfig.whatsappNumber.trim();
  const contactByEmail = bookingConfig.email.trim();
  const message = encodeURIComponent(`Hola, me gustaría solicitar información y disponibilidad para reservar ${bookingConfig.propertyName}.`);

  bookingButtons.forEach((button) => {
    button.classList.remove("is-disabled");
    button.removeAttribute("aria-disabled");
    button.querySelector(".booking-label")?.replaceChildren("Consultar disponibilidad");
    button.addEventListener("click", () => {
      if (contactByWhatsApp) {
        window.open(`https://wa.me/${contactByWhatsApp}?text=${message}`, "_blank", "noopener");
      } else if (contactByEmail) {
        window.location.href = `mailto:${contactByEmail}?subject=${encodeURIComponent(`Reserva - ${bookingConfig.propertyName}`)}&body=${message}`;
      } else {
        showToast("Agrega un número de WhatsApp o correo en app.js para activar las reservaciones.");
      }
    });
  });
};

if (bookingConfig.bookingStatus === "available") {
  activateBooking();
} else {
  bookingButtons.forEach((button) => {
    button.addEventListener("click", () => showToast("Las reservaciones estarán disponibles muy pronto."));
  });
}

// Año automático en footer
document.querySelector("#currentYear").textContent = new Date().getFullYear();
