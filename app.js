const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".scroll-link");
const indicator = document.getElementById("scrollIndicator");
const container = document.getElementById("scrollContainer");
const scrollNav = document.getElementById("scrollNav");
const leftArrow = document.getElementById("navLeft");
const rightArrow = document.getElementById("navRight");

/* ========== Sliding Underline ========== */
function moveIndicator(link) {
  indicator.style.width = `${link.offsetWidth}px`;
  indicator.style.left = `${link.offsetLeft}px`;
}

/* ========== ScrollSpy (Optimized) ========== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
          moveIndicator(link);

          /* Auto center active tab */
          container.scrollLeft =
            link.offsetLeft - container.offsetWidth / 2 + link.offsetWidth / 2;
        }
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

/* ========== Arrow Scroll ========== */
leftArrow.addEventListener("click", () => {
  container.scrollBy({ left: -200, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  container.scrollBy({ left: 200, behavior: "smooth" });
});

/* ========== Sticky Background Change ========== */
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollNav.classList.add("scrolled");
  } else {
    scrollNav.classList.remove("scrolled");
  }
});

/* ========== Init indicator position ========== */
window.addEventListener("load", () => {
  const active = document.querySelector(".scroll-link.active");
  if (active) moveIndicator(active);
});
function moveIndicator(link) {
  indicator.style.width = `${link.offsetWidth}px`;
  indicator.style.left = `${link.offsetLeft}px`;
}
window.addEventListener("load", () => {
  const active = document.querySelector(".scroll-link.active");
  if (active) {
    moveIndicator(active);
  }
});
leftArrow.addEventListener("click", () => {
  container.scrollBy({ left: -250, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  container.scrollBy({ left: 250, behavior: "smooth" });
});
const curatedContainer = document.getElementById("curatedContainer");
const curatedLeft = document.getElementById("curatedLeft");
const curatedRight = document.getElementById("curatedRight");

curatedLeft.addEventListener("click", () => {
  curatedContainer.scrollBy({
    left: -600,
    behavior: "smooth"
  });
});

curatedRight.addEventListener("click", () => {
  curatedContainer.scrollBy({
    left: 600,
    behavior: "smooth"
  });
});

const summerContainer = document.getElementById("summerContainer");
const summerLeft = document.getElementById("summerLeft");
const summerRight = document.getElementById("summerRight");

if (summerLeft && summerRight) {

  summerLeft.addEventListener("click", () => {
    summerContainer.scrollBy({
      left: -400,
      behavior: "smooth"
    });
  });

  summerRight.addEventListener("click", () => {
    summerContainer.scrollBy({
      left: 400,
      behavior: "smooth"
    });
  });

}


const track = document.getElementById("promoTrack");
const slides = document.querySelectorAll(".promo-slide");
const dotsContainer = document.getElementById("promoDots");

let currentIndex = 0;
let interval;

if (track && slides.length > 0) {
  /* ===== CREATE DOTS ===== */
  if (dotsContainer) {
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => moveToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  const dots = document.querySelectorAll(".promo-dots span");

  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add("active");
    }
  }

  function moveToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      moveToSlide(currentIndex);
    }, 2000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  /* Pause on hover */
  const promoSlider = document.getElementById("promoSlider");
  if (promoSlider) {
    promoSlider.addEventListener("mouseenter", stopAutoSlide);
    promoSlider.addEventListener("mouseleave", startAutoSlide);
  }

  updateDots();
  startAutoSlide();
}


const bannerTrack = document.getElementById("bannerTrack");
const bannerSlides = document.querySelectorAll(".banner-slide");
const bannerDotsContainer = document.getElementById("bannerDots");

let bannerIndex = 0;
let bannerInterval;

if (bannerTrack && bannerSlides.length > 0) {
  /* Create dots dynamically */
  if (bannerDotsContainer) {
    bannerSlides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => goToSlide(index));
      bannerDotsContainer.appendChild(dot);
    });
  }

  const bannerDots = document.querySelectorAll(".banner-dots span");

  function updateDots() {
    if (bannerDots.length > 0) {
      bannerDots.forEach(dot => dot.classList.remove("active"));
      if (bannerDots[bannerIndex]) {
        bannerDots[bannerIndex].classList.add("active");
      }
    }
  }

  function goToSlide(index) {
    bannerIndex = index;
    bannerTrack.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function autoSlide() {
    bannerIndex = (bannerIndex + 1) % bannerSlides.length;
    goToSlide(bannerIndex);
  }

  function startBanner() {
    bannerInterval = setInterval(autoSlide, 2000);
  }

  function stopBanner() {
    clearInterval(bannerInterval);
  }

  /* Pause on hover */
  const bannerSlider = document.getElementById("bannerSlider");
  if (bannerSlider) {
    bannerSlider.addEventListener("mouseenter", stopBanner);
    bannerSlider.addEventListener("mouseleave", startBanner);
  }

  /* Init */
  updateDots();
  startBanner();
}
function moveIndicator(link) {
  indicator.style.width = `${link.offsetWidth}px`;
  indicator.style.left = `${link.offsetLeft}px`;
}

window.addEventListener("load", () => {
  const active = document.querySelector(".scroll-link.active");
  if (active) moveIndicator(active);
});

/* ================= SERVICE DROPDOWN & INTERACTIVE CALL-TO-ACTIONS ================= */

const serviceData = {
  "periodic": [
    "Basic Service",
    "Standard Service",
    "Comprehensive Service"
  ],
  "ac": [
    "AC Gas Refill",
    "AC Compressor Repair",
    "AC Gas Top-Up",
    "AC Filter Cleaning"
  ],
  "spa": [
    "Interior Deep Cleaning",
    "Exterior Wash & Wax",
    "Full Car Spa"
  ],
  "denting": [
    "Full Body Paint",
    "Scratch & Dent Removal",
    "Panel Repair"
  ],
  "battery": [
    "Battery Replacement",
    "Battery Health Check"
  ],
  "tyre": [
    "Tyre Replacement",
    "Wheel Alignment",
    "Wheel Balancing"
  ],
  "detailing": [
    "Ceramic Coating",
    "Paint Protection Film (PPF)",
    "Polishing & Rubbing"
  ],
  "insurance": [
    "Cashless Insurance Claims",
    "Accidental Repair & Claims"
  ],
  "inspection": [
    "Complete Car Inspection",
    "Pre-Purchase Inspection",
    "Engine Diagnostics"
  ],
  "windshield": [
    "Front Windshield Glass",
    "Rear Windshield Glass",
    "Door Glass Replacement",
    "Headlight / Taillight Replacement"
  ]
};

const serviceCategory = document.getElementById("serviceCategory");
const serviceType = document.getElementById("serviceType");

// When category changes
serviceCategory.addEventListener("change", function () {
  serviceType.innerHTML = '<option value="">SELECT SERVICE</option>';

  let services = serviceData[this.value];

  if (services) {
    services.forEach(service => {
      let option = document.createElement("option");
      option.value = service;
      option.textContent = service;
      serviceType.appendChild(option);
    });
  }
});

// Helper: Scroll to form and auto-select options
function redirectToInquireForm(categoryValue, serviceValue = "") {
  const formSection = document.querySelector(".hero-form");
  if (!formSection) return;

  // Auto-select category
  if (categoryValue) {
    serviceCategory.value = categoryValue;
    // Trigger change event to populate services dropdown
    serviceCategory.dispatchEvent(new Event("change"));
  }

  // Auto-select specific service if provided
  if (serviceValue) {
    // Wait slightly for options to populate
    setTimeout(() => {
      for (let option of serviceType.options) {
        if (option.text.toLowerCase() === serviceValue.toLowerCase() ||
            option.text.toLowerCase().includes(serviceValue.toLowerCase())) {
          serviceType.value = option.value;
          break;
        }
      }
    }, 50);
  }

  // Smooth scroll to hero form
  formSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

// 1. Available Services Click Handlers
document.querySelectorAll(".available-card").forEach(card => {
  card.addEventListener("click", () => {
    const text = card.querySelector("h4").textContent.trim();
    let category = "";
    
    if (text.includes("Car Services")) category = "periodic";
    else if (text.includes("AC Service")) category = "ac";
    else if (text.includes("Batteries")) category = "battery";
    else if (text.includes("Tyres")) category = "tyre";
    else if (text.includes("Denting")) category = "denting";
    else if (text.includes("Detailing")) category = "detailing";
    else if (text.includes("Car Spa")) category = "spa";
    else if (text.includes("Windshield")) category = "windshield";
    else if (text.includes("Suspension")) category = "periodic"; // Map suspension to periodic
    else if (text.includes("Insurance")) category = "insurance";

    redirectToInquireForm(category);
  });
});

// 2. Curated Custom Services Click Handlers
document.querySelectorAll(".curated-item").forEach(item => {
  item.addEventListener("click", () => {
    const text = item.querySelector("p").textContent.trim();
    let category = "";
    let service = "";

    if (text.includes("Batteries")) {
      category = "battery";
      service = "Battery Replacement";
    } else if (text.includes("Brakes")) {
      category = "periodic";
      service = "Standard Service";
    } else if (text.includes("AC Parts")) {
      category = "ac";
      service = "AC Repair";
    } else if (text.includes("Clutch")) {
      category = "periodic";
      service = "Comprehensive Service";
    } else if (text.includes("Tyres")) {
      category = "tyre";
      service = "Tyre Replacement";
    } else if (text.includes("Suspension")) {
      category = "periodic";
      service = "Comprehensive Service";
    } else if (text.includes("Lights") || text.includes("Glasses") || text.includes("Side Mirror")) {
      category = "windshield";
      if (text.includes("Lights")) service = "Headlight / Taillight Replacement";
      else if (text.includes("Glasses")) service = "Front Windshield Glass";
      else service = "Door Glass Replacement";
    } else if (text.includes("Car Spa")) {
      category = "spa";
      service = "Full Car Spa";
    } else if (text.includes("Car Detailing")) {
      category = "detailing";
      service = "Ceramic Coating";
    } else if (text.includes("Body Parts")) {
      category = "denting";
      service = "Panel Repair";
    }

    redirectToInquireForm(category, service);
  });
});

// 3. Summer Services Click Handlers
document.querySelectorAll(".summer-card").forEach(card => {
  card.addEventListener("click", () => {
    const text = card.querySelector("h4").textContent.trim();
    let category = "";
    let service = "";

    if (text.includes("Bumper Paint")) {
      category = "denting";
      service = "Scratch & Dent Removal";
    } else if (text.includes("Rubbing")) {
      category = "detailing";
      service = "Polishing & Rubbing";
    } else if (text.includes("All Round Spa")) {
      category = "spa";
      service = "Full Car Spa";
    } else if (text.includes("Periodic") || text.includes("Standard")) {
      category = "periodic";
      service = "Standard Service";
    }

    redirectToInquireForm(category, service);
  });
});

// 4. Promo Banner Slider Click Handler
document.querySelectorAll(".banner-slide").forEach(slide => {
  slide.addEventListener("click", () => {
    redirectToInquireForm("inspection", "Complete Car Inspection");
  });
});

// 5. Price List "SEE MORE" Click Handler
const seeMoreBtn = document.querySelector(".price-section .see-more");
if (seeMoreBtn) {
  seeMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    redirectToInquireForm("periodic");
  });
}

// 6. SOS Button Click Handler
const sosBtn = document.querySelector(".sos-btn");
if (sosBtn) {
  sosBtn.addEventListener("click", () => {
    redirectToInquireForm("inspection", "Engine Diagnostics");
  });
}

// 7. Inquire Form WhatsApp Automation Submit Handler
const inquireForm = document.querySelector(".hero-form form");
if (inquireForm) {
  inquireForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent standard page reload submit

    // Get input values
    const carSelect = document.getElementById("carSelect");
    const categorySelect = document.getElementById("serviceCategory");
    const serviceSelect = document.getElementById("serviceType");
    const phoneInput = document.getElementById("mobileNumber");

    const carText = carSelect.value;
    const categoryText = categorySelect.options[categorySelect.selectedIndex]?.text || "";
    const serviceText = serviceSelect.options[serviceSelect.selectedIndex]?.text || "";
    const phoneNumber = phoneInput.value.trim();

    // Validation checks
    if (!categorySelect.value) {
      alert("Please select a service category.");
      categorySelect.focus();
      return;
    }
    if (!serviceSelect.value) {
      alert("Please select a specific service.");
      serviceSelect.focus();
      return;
    }
    if (!carSelect.value) {
      alert("Please select your car.");
      carSelect.focus();
      return;
    }
    
    // Simple mobile number validation (must be 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      phoneInput.focus();
      return;
    }

    // Build the WhatsApp message
    const message = `Hello My Mechanic! 🚗\n\n` +
      `I would like to inquire about a car service booking.\n\n` +
      `📌 *Booking Details*:\n` +
      `• *Car Manufacturer:* ${carText}\n` +
      `• *Service Category:* ${categoryText}\n` +
      `• *Service Selected:* ${serviceText}\n` +
      `• *Customer Mobile:* ${phoneNumber}\n\n` +
      `Please get back to me with the price estimation and available slots. Thanks!`;

    // Encode text message and redirect
    const encodedText = encodeURIComponent(message);
    const whatsappNum = "8826991028";
    
    // Redirect to WhatsApp Web/App
    const whatsappUrl = `https://api.whatsapp.com/send?phone=91${whatsappNum}&text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  });
}

/* ================= REVIEW SLIDER ================= */

const reviewTrack = document.getElementById("reviewTrack");
const reviewDotsContainer = document.getElementById("reviewDots");
const reviewSlides = document.querySelectorAll(".review-slide");

let reviewIndex = 0;
let reviewInterval;

if (reviewTrack && reviewSlides.length > 0) {
  /* Create dots */
  if (reviewDotsContainer) {
    reviewSlides.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToReview(i));
      reviewDotsContainer.appendChild(dot);
    });
  }

  const reviewDotEls = reviewDotsContainer.querySelectorAll("span");

  function goToReview(index) {
    reviewIndex = index;
    reviewTrack.style.transform = `translateX(-${index * 100}%)`;
    if (reviewDotEls.length > 0) {
      reviewDotEls.forEach(d => d.classList.remove("active"));
      if (reviewDotEls[index]) {
        reviewDotEls[index].classList.add("active");
      }
    }
  }

  function startReviewSlider() {
    reviewInterval = setInterval(() => {
      reviewIndex = (reviewIndex + 1) % reviewSlides.length;
      goToReview(reviewIndex);
    }, 2000);
  }

  function stopReviewSlider() {
    clearInterval(reviewInterval);
  }

  /* Pause on hover */
  reviewTrack.addEventListener("mouseenter", stopReviewSlider);
  reviewTrack.addEventListener("mouseleave", startReviewSlider);

  startReviewSlider();
}

/* ================= PAGE LOADER FADE OUT ================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.remove();
    }, 400);
  }
});

// 8. Gallery Lightbox Functionality
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("galleryLightbox");
const lightboxImg = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.querySelector(".lightbox-close");

if (galleryItems.length > 0 && lightbox && lightboxImg) {
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.textContent = img.alt || "Workshop Image";
        }
        lightbox.classList.add("active");
      }
    });
  });

  // Close when clicking Close (x)
  if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  // Close when clicking background outside the image content
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-close")) {
      lightbox.classList.remove("active");
    }
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
    }
  });
}