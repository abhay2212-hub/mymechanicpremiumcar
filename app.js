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

/* ================= SERVICE DROPDOWN ================= */

const serviceData = {
  "Periodic Services": [
    "Basic Service",
    "Standard Service",
    "Comprehensive Service"
  ],
  "AC Services": [
    "AC Gas Refill",
    "AC Repair",
    "AC Cleaning"
  ],
  "Car Spa & Cleaning": [
    "Interior Cleaning",
    "Exterior Wash",
    "Full Car Spa"
  ],
  "Denting & Painting": [
    "Full Body Paint",
    "Scratch Removal",
    "Panel Repair"
  ],
  "Battery Services": [
    "Battery Replacement",
    "Battery Checkup"
  ]
};

const serviceCategory = document.getElementById("serviceCategory");
const serviceType = document.getElementById("serviceType");

// Fill service categories
for (let category in serviceData) {
  let option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  serviceCategory.appendChild(option);
}

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